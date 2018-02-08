import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

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

  availableAMDates: any = [
    {
      // Morning
      day: moment('2018-02-08 08:30:00').format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 08:30:00')
        .add(30, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 08:30:00')
        .add(60, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 08:30:00')
        .add(90, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 08:30:00')
        .add(120, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 08:30:00')
        .add(150, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 08:30:00')
        .add(180, 'm')
        .format(this.availTimeFmt),
      disabled: false
    }
  ];

  availablePMDates: any = [
    {
      day: moment('2018-02-08 12:00:00').format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 12:00:00')
        .add(30, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 12:00:00')
        .add(60, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 12:00:00')
        .add(90, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 12:00:00')
        .add(120, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 12:00:00')
        .add(150, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 12:00:00')
        .add(180, 'm')
        .format(this.availTimeFmt),
      disabled: false
    }
  ];

  availableEveDates: any = [
    {
      day: moment('2018-02-08 16:00:00').format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 16:00:00')
        .add(30, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 16:00:00')
        .add(60, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 16:00:00')
        .add(90, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 16:00:00')
        .add(120, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 16:00:00')
        .add(150, 'm')
        .format(this.availTimeFmt),
      disabled: false
    },
    {
      day: moment('2018-02-08 16:00:00')
        .add(180, 'm')
        .format(this.availTimeFmt),
      disabled: false
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.today = moment().format(this.dayOfWeekFmt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailabilityPage');
    // this.doCheckShowNext();
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
