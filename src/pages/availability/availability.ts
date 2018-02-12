import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { AvailabilityProvider } from '../../providers/availability/availability';

/**
 * Generated class for the AvailabilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-availability',
  templateUrl: 'availability.html'
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

  schedule: any;
  //  = [
  //   { unit: 'day', date: moment().format(this.dayOfWeekFmt) },
  //   {
  //     unit: 'day',
  //     date: moment()
  //       .add(1, 'day')
  //       .format(this.dayOfWeekFmt)
  //   }
  // ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public avail: AvailabilityProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailabilityPage');

    this.schedule = this.generateSchedule(
      moment(),
      this.dayOfWeekFmt,
      1,
      'day',
      7
    );

    for (let y = 0; y < this.schedule.length; y++) {
      let slots = [];
      console.log(this.schedule[y]);
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
      let merged = [].concat.apply([], slots);
      this.schedule[y].slots = merged;
    }

    console.log(this.schedule);

    // this.availableAMDates =

    // this.availableAMDates = this.avail.generateAvailabilitySlots(
    //   moment()
    //     .hour(8)
    //     .minutes(30)
    //     .seconds(0),
    //   this.availTimeFmt,
    //   30,
    //   'm',
    //   6
    // );
    // this.availablePMDates = this.avail.generateAvailabilitySlots(
    //   moment()
    //     .hour(12)
    //     .minutes(0)
    //     .seconds(0),
    //   this.availTimeFmt,
    //   30,
    //   'm',
    //   6,
    //   'afternoon'
    // );
    // this.availableEveDates = this.avail.generateAvailabilitySlots(
    //   moment()
    //     .hour(16)
    //     .minutes(0)
    //     .seconds(0),
    //   this.availTimeFmt,
    //   30,
    //   'm',
    //   6,
    //   'evening'
    // );
  }

  goToHome() {
    console.log('go to home');
    console.log(this.navCtrl.length());
    if (this.navCtrl.length() === 1) {
      this.navCtrl.push('TabsPage', {
        isStylist: true
      });
    }
  }

  /**
   *
   *
   * @param {any} startDate
   * @param {any} dateFmt
   * @param {any} interval 1
   * @param {any} dateUnit
   * @param {any} runsFor
   * @returns
   * @memberof AvailabilityPage
   */
  generateSchedule(startDate, dateFmt, interval, dateUnit, runsFor) {
    let schedule = [{ date: startDate.format(dateFmt), unit: dateUnit }];
    let loopInt = interval;
    for (let x = 0; x < runsFor; x++) {
      schedule.push({
        date: moment(startDate)
          .add(loopInt, dateUnit)
          .format(dateFmt),
        unit: dateUnit
      });
      loopInt = loopInt + interval;
    }
    return schedule;
  }

  setSlotTaken(option, optionobj) {
    optionobj.forEach(el => {
      console.log(el);
      if (option.day === el.day && option.date === el.date) {
        el.disabled = !option.disabled;
      }
    });
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
