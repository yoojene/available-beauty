import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
} from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-looking',
  templateUrl: 'looking.html',
})
export class LookingPage {
  public lookingForTitle: string = 'What are you looking for?';
  public lookingWhenTitle: string = 'When do you need it?';
  public searchTitle: string = 'Search';

  public hairText: string = 'Hair';
  public nailsText: string = 'Nails';
  public treatmentsText: string = 'Treatments';

  public dayOfWeekFmt: string = 'ddd Do';

  public entryLoader: any;

  public beautyOptions: any = [
    {
      name: this.hairText,
      disabled: false,
    },
    {
      name: this.nailsText,
      disabled: false,
    },
    {
      name: this.treatmentsText,
      disabled: false,
    },
  ];

  public availableDates: any = [
    {
      // 'day': moment().format(this.dayOfWeekFmt),
      day: 'Today',
      disabled: false,
    },
    {
      day: moment()
        .add(1, 'days')
        .format(this.dayOfWeekFmt),
      disabled: false,
    },
    {
      day: moment()
        .add(2, 'days')
        .format(this.dayOfWeekFmt),
      disabled: false,
    },
    {
      day: moment()
        .add(3, 'days')
        .format(this.dayOfWeekFmt),
      disabled: false,
    },
    {
      day: moment()
        .add(4, 'days')
        .format(this.dayOfWeekFmt),
      disabled: false,
    },
    {
      day: moment()
        .add(5, 'days')
        .format(this.dayOfWeekFmt),
      disabled: false,
    },
    {
      day: moment()
        .add(6, 'days')
        .format(this.dayOfWeekFmt),
      disabled: false,
    },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loading: LoadingController
  ) {}

  public ionViewDidLoad() {
    console.log('ionViewDidLoad LookingPage');
    console.log(this.availableDates);
    this.entryLoader;
  }

  public goToHome() {
    this.navCtrl.push('TabsPage', { isStylist: false });
  }

  public setDisabled(option, optionobj) {
    console.log(option);
    console.log(optionobj);

    optionobj.forEach(el => {
      console.log(el);
      if (option.name !== el.name) {
        el.disabled = !option.disabled;
      } else if (option.day !== el.day) {
        el.disabled = !option.disabled;
      }
    });
  }

  public resetDisabled() {
    this.availableDates.forEach(el => {
      el.disabled = false;
    });
    this.beautyOptions.forEach(el => {
      el.disabled = false;
    });
  }
}
