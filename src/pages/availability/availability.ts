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
import { AvailabilitySlot } from '../../model/availability/availability.model';

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
  availabilitySubHeader = 'Mark the times you are available';
  showNext: boolean;
  dayOfWeekFmt: string = 'ddd Do MMM';
  availTimeFmt: string = 'HH:mm';
  today: any;
  morningStart: any = moment()
    .hour(8)
    .minutes(30)
    .seconds(0);

  availableAMDates: any;
  availablePMDates: any;
  availableEveDates: any;

  stylistId: string;

  schedule: any;

  entryLoader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public avail: AvailabilityProvider,
    public stylist: StylistProvider,
    private _afdb: AngularFireDatabase,
    private _utils: UtilsProvider,
    private _loading: LoadingController
  ) {}

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.entryLoader = this._loading.create();
    this.entryLoader.present().then(() => {
      this.stylist
        .getStylist(firebase.auth().currentUser.uid)
        .snapshotChanges()
        .subscribe(res => {
          console.log('cmon');
          this.stylistId = res[0].key;
          console.log(this.stylistId);
          this.generateAvailabilitySchedule();
        });
    });

    this.doCheckShowNext();
  }

  ionViewDidLoad() {}
  /**
   * Set up length of schedule on availability page and slot length/duration
   * Default is 1 day for 7 days ahead and 18 slots of 30m per day
   * @private
   * @memberof AvailabilityPage
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
      let slots = [];
      slots.push(
        this.avail.generateAvailabilitySlots(
          moment(this.schedule[y].date, this.dayOfWeekFmt)
            .hour(8)
            .minutes(30)
            .seconds(0),
          this.availTimeFmt,
          30,
          'm',
          6,
          'morning'
        )
      );
      slots.push(
        this.avail.generateAvailabilitySlots(
          moment(this.schedule[y].date, this.dayOfWeekFmt)
            .hour(12)
            .minutes(0)
            .seconds(0),
          this.availTimeFmt,
          30,
          'm',
          6,
          'afternoon'
        )
      );
      slots.push(
        this.avail.generateAvailabilitySlots(
          moment(this.schedule[y].date, this.dayOfWeekFmt)
            .hour(16)
            .minutes(30)
            .seconds(0),
          this.availTimeFmt,
          30,
          'm',
          6,
          'evening'
        )
      );
      // Collapse into single array
      let merged = [].concat.apply([], slots);
      this.schedule[y].slots = merged;
    }

    // This is a bit naff, ideally want to seed schedule from what's already taken, and not the otherway around
    let stylistId = this.stylistId;
    console.log(stylistId);

    this.avail
      .getStylistAvailability(stylistId)
      .snapshotChanges()
      .subscribe(res => {
        let results = this._utils.generateFirebaseKeyedValues(res);
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

  goToHome() {
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
   * @param {any} startDate - Date to start schedule
   * @param {any} dateFmt - moment date/time format
   * @param {any} interval 1
   * @param {any} dateUnit - moment date format
   * @param {any} runsFor - how long the schedule runs for
   * @returns
   * @memberof AvailabilityPage
   */
  generateSchedule(
    startDate: Moment,
    dateFmt: string,
    interval: number,
    dateUnit: moment.unitOfTime.DurationConstructor,
    runsFor: number
  ) {
    let schedule = [{ date: startDate.format(dateFmt), unit: dateUnit }];
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
  /**
   * Mark the given slot taken
   *
   * @param {any} option
   * @param {any} optionobj
   * @memberof AvailabilityPage
   */
  setSlotTaken(option, optionobj: AvailabilitySlot[]) {
    optionobj.forEach(el => {
      if (option.time === el.time && option.date === el.date) {
        el.disabled = !option.disabled;

        this.avail.setAvailabilityTaken(el.epoch, this.stylistId);
      }
    });
  }
  /**
   * Mark all slots on the day taken
   *
   * @param {any} slot
   * @memberof AvailabilityPage
   */
  setAllSlotsTaken(slot) {
    slot.slots.forEach(el => {
      el.disabled = !el.disabled;
    });
  }

  updateTakenSlots(bookedSlots) {
    console.log(bookedSlots);
    console.log(this.schedule);

    bookedSlots.forEach(el => {
      // return momel.datetime;
    });
  }

  doCheckShowNext() {
    if (this.navCtrl.length() === 2) {
      console.log(';showing');
      this.showNext = true;
    } else {
      console.log('not showing');
      this.showNext = false;
    }
  }

  doShowPeriod(period) {
    // For filtering am/pm/eve if required
    console.log(period);

    console.log(period._elementRef.nativeElement.name);
    let filtered = this.availableAMDates.filter(el => {
      return el.period === period._elementRef.nativeElement.name;
    });

    console.log(filtered);
    // this.availableAMDates = filtered;
  }
}
