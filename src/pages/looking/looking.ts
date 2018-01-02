import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvailableBeautyApp } from '../../app/app.component';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-looking',
  templateUrl: 'looking.html'
})
export class LookingPage {

  lookingForTitle: string = 'What are you looking for?';
  lookingWhenTitle: string = 'When do you need it?';
  searchTitle: string = 'Or Search';

  dayOfWeekFmt: string = 'ddd Do'

  availableDates: any = [
    {
      'day': 'Today'
    },
    {
      'day': moment().add(1, 'days').format(this.dayOfWeekFmt)
    },
    {
      'day': moment().add(2, 'days').format(this.dayOfWeekFmt)
    },
    {
      'day': moment().add(3, 'days').format(this.dayOfWeekFmt)
    },
    {
      'day': moment().add(4, 'days').format(this.dayOfWeekFmt)
    },
    {
      'day': moment().add(5, 'days').format(this.dayOfWeekFmt)
    },
    {
      'day': moment().add(6, 'days').format(this.dayOfWeekFmt)
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LookingPage');
    console.log(this.availableDates);
  }

  goToHome() {
    this.navCtrl.push('TabsPage');
  }
}
