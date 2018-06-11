import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
} from 'ionic-angular';
import * as moment from 'moment';
import { AvailabilityProvider } from '../../providers/availability/availability';
import { Stylist } from '../../model/stylist/stylist.model';
import * as firebase from 'firebase';
import { StylistProvider } from '../../providers/stylist/stylist';
import { AngularFireDatabase } from 'angularfire2/database';
import { UtilsProvider } from '../../providers/utils/utils';
import { Moment } from 'moment';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the AvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-availability',
  templateUrl: 'availability.html',
})
export class AvailabilityPage {
  public availabilitySubHeader = 'Mark the times you are available';
  public morningText = 'morning';
  public afternoonText = 'afternoon';
  public eveningText = 'evening';
  public showNext: boolean;
  public dayOfWeekFmt: string = 'ddd Do MMM';
  public availTimeFmt: string = 'HH:mm';
  public today: any;
  public morningStart: any = moment()
    .hour(8)
    .minutes(0)
    .seconds(0);

  public availableAMDates: any;
  public availablePMDates: any;
  public availableEveDates: any;

  public stylistId: string;

  public schedule: any;

  public entryLoader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public avail: AvailabilityProvider,
    public user: UserProvider,
    private _afdb: AngularFireDatabase,
    private _utils: UtilsProvider,
    private _loading: LoadingController
  ) {}

  // Lifecycle
  public ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.stylistId = firebase.auth().currentUser.uid;
    this.entryLoader = this._loading.create();
    this.entryLoader.present().then(() => {
      // this.user
      //   .getUserById(firebase.auth().currentUser.uid)
      //   .snapshotChanges()
      //   .subscribe(res => {
      //     console.log('what is it');
      //     console.log(res);
      //     this.stylistId = res[0].key;
      //     console.log(this.stylistId);
      this.generateAvailabilitySchedule();
      // });
    });

    this.doCheckShowNext();
  }

  // Private

  /**
   * Set up length of schedule on availability page and slot length/duration
   * Default is 1 day for 7 days ahead and 18 slots of 30m per day
   */

  private generateAvailabilitySchedule() {
    // Generate the schedule
    this.schedule = this.generateSchedule(
      moment(),
      this.dayOfWeekFmt,
      1,
      'day',
      7
    );

    // Generate the slots per schedule
    for (let y = 0; y < this.schedule.length; y++) {
      let morningSlots = [];
      morningSlots.push(
        this.avail.generateAvailabilitySlots(
          moment(this.schedule[y].date, this.dayOfWeekFmt)
            .hour(8)
            .minutes(0)
            .seconds(0),
          this.availTimeFmt,
          30,
          'm',
          8,
          'morning'
        )
      );
      const afternoonSlots = [];
      afternoonSlots.push(
        this.avail.generateAvailabilitySlots(
          moment(this.schedule[y].date, this.dayOfWeekFmt)
            .hour(12)
            .minutes(0)
            .seconds(0),
          this.availTimeFmt,
          30,
          'm',
          8,
          'afternoon'
        )
      );
      const eveningSlots = [];
      eveningSlots.push(
        this.avail.generateAvailabilitySlots(
          moment(this.schedule[y].date, this.dayOfWeekFmt)
            .hour(16)
            .minutes(0)
            .seconds(0),
          this.availTimeFmt,
          30,
          'm',
          8,
          'evening'
        )
      );
      // Collapse into single array
      const morningMerged = [].concat.apply([], morningSlots);
      this.schedule[y].morningSlots = morningMerged;
      const afternoonMerged = [].concat.apply([], afternoonSlots);
      this.schedule[y].afternoonSlots = afternoonMerged;
      const eveningMerged = [].concat.apply([], eveningSlots);
      this.schedule[y].eveningSlots = eveningMerged;
    }

    console.log(this.schedule);

    // This is a bit naff, ideally want to seed schedule from what's already taken, and not the otherway around
    const stylistId = this.stylistId;
    console.log(stylistId);

    this.avail
      .getStylistAvailability(stylistId)
      .snapshotChanges()
      .subscribe(res => {
        // console.log(res);
        const results = this._utils.generateFirebaseKeyedValues(res);
        console.log(results);
        results.forEach(res => {
          this.schedule.forEach(sched => {
            sched.slots.forEach(el => {
              if (el.epoch === res.datetime) {
                el.disabled = true;
              }
            });
          });
        });
      });

    this.entryLoader.dismiss();
  }

  public goToHome() {
    console.log('go to home');
    console.log(this.navCtrl.length());
    if (this.navCtrl.length() === 1) {
      this.navCtrl.push('TabsPage', {
        isStylist: true,
      });
    }
  }

  /**
   * Create the parent schedule object
   *
   * @param startDate - Date to start schedule
   * @param dateFmt - moment date/time format
   * @param interval 1
   * @param dateUnit - moment date format
   * @param runsFor - how long the schedule runs for
   */
  private generateSchedule(
    startDate: Moment,
    dateFmt: string,
    interval: number,
    dateUnit: moment.unitOfTime.DurationConstructor,
    runsFor: number
  ) {
    const schedule = [{ date: startDate.format(dateFmt), unit: dateUnit }];
    let loopInt = interval;
    for (let x = 0; x < runsFor; x++) {
      schedule.push({
        date: moment(startDate)
          .add(loopInt, dateUnit)
          .format(dateFmt),
        unit: dateUnit,
      });
      loopInt = loopInt + interval;
    }

    return schedule;
  }

  // Public
  /**
   * Mark the given slot taken
   *
   * @param option
   * @param optionobj
   */
  public setSlotTaken(option, optionobj) {
    optionobj.forEach(el => {
      if (option.time === el.time && option.date === el.date) {
        el.disabled = !option.disabled;

        this.avail.setAvailabilityTaken(el.epoch, this.stylistId);
      }
    });
  }
  // /**
  //  * Mark all slots on the day taken
  //  *
  //  * @param {any} slot
  //  * @memberof AvailabilityPage
  //  */
  // setAllSlotsTaken(slot) {
  //   slot.slots.forEach(el => {
  //     el.disabled = !el.disabled;
  //   });
  // }

  /**
   * Mark all slots for a sub group on the day taken
   *
   * @param slot
   * @param subgroup
   */
  public setAllSlotsTaken(slot, subgroup) {
    if (subgroup === 'morning' || subgroup === 'all') {
      slot.morningSlots.forEach(el => {
        el.disabled = !el.disabled;
      });
    }
    if (subgroup === 'afternoon' || subgroup === 'all') {
      slot.afternoonSlots.forEach(el => {
        el.disabled = !el.disabled;
      });
    }
    if (subgroup === 'evening' || subgroup === 'all') {
      slot.eveningSlots.forEach(el => {
        el.disabled = !el.disabled;
      });
    }
  }

  private updateTakenSlots(bookedSlots) {
    console.log(bookedSlots);
    console.log(this.schedule);

    bookedSlots.forEach(el => {
      // return momel.datetime;
    });
  }

  private doCheckShowNext() {
    if (this.navCtrl.length() === 2) {
      console.log(';showing');
      this.showNext = true;
    } else {
      console.log('not showing');
      this.showNext = false;
    }
  }

  private doShowPeriod(period) {
    // For filtering am/pm/eve if required
    console.log(period);

    console.log(period._elementRef.nativeElement.name);
    const filtered = this.availableAMDates.filter(el => {
      return el.period === period._elementRef.nativeElement.name;
    });

    console.log(filtered);
    // this.availableAMDates = filtered;
  }
}
