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
  showNext: boolean;
  dayOfWeekFmt: string = 'ddd Do MMM';
  availTimeFmt: string = 'HH:mm';
  today: any;
  morningStart: any = moment()
    .hour(8)
    .minutes(30)
    .seconds(0);

  availableAMDates: any;
  //  = [
  //   {
  //     // Morning
  //     day: this.morningStart.format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 08:30:00')
  //       .add(30, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 08:30:00')
  //       .add(60, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 08:30:00')
  //       .add(90, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 08:30:00')
  //       .add(120, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 08:30:00')
  //       .add(150, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 08:30:00')
  //       .add(180, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   }
  // ];

  availablePMDates: any;
  // = [
  //   {
  //     day: moment('2018-02-08 12:00:00').format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 12:00:00')
  //       .add(30, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 12:00:00')
  //       .add(60, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 12:00:00')
  //       .add(90, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 12:00:00')
  //       .add(120, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 12:00:00')
  //       .add(150, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 12:00:00')
  //       .add(180, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   }
  // ];

  availableEveDates: any;
  //  = [
  //   {
  //     day: moment('2018-02-08 16:00:00').format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 16:00:00')
  //       .add(30, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 16:00:00')
  //       .add(60, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 16:00:00')
  //       .add(90, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 16:00:00')
  //       .add(120, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 16:00:00')
  //       .add(150, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   },
  //   {
  //     day: moment('2018-02-08 16:00:00')
  //       .add(180, 'm')
  //       .format(this.availTimeFmt),
  //     disabled: false
  //   }
  // ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public avail: AvailabilityProvider
  ) {
    this.today = moment().format(this.dayOfWeekFmt);
    // this.morningStart = moment()
    //   .hour(8)
    //   .minutes(30)
    //   .seconds(0);
    // console.log(this.morningStart);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailabilityPage');

    this.availableAMDates = this.avail.generateAvailabilitySlots(
      moment()
        .hour(8)
        .minutes(30)
        .seconds(0),
      this.availTimeFmt,
      30,
      'm',
      6
    );
    this.availablePMDates = this.avail.generateAvailabilitySlots(
      moment()
        .hour(12)
        .minutes(0)
        .seconds(0),
      this.availTimeFmt,
      30,
      'm',
      6
    );
    this.availableEveDates = this.avail.generateAvailabilitySlots(
      moment()
        .hour(16)
        .minutes(0)
        .seconds(0),
      this.availTimeFmt,
      30,
      'm',
      6
    );
  }

  // doCheckShowNext() {
  //   if (this.navCtrl.length() === 2) {
  //     this.showNext = true;
  //   } else {
  //     this.showNext = false;
  //   }
  // }

  goToHome() {
    console.log('go to home');
    console.log(this.navCtrl.length());
    if (this.navCtrl.length() === 1) {
      this.navCtrl.push('TabsPage', {
        isStylist: true
      });
    }
  }
}
