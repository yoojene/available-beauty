import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchProvider } from '../../providers/search/search';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public searchForm: any;
  public searchTerm: any;
  public counter: number = this.getRandomInt();

  public previousTerms: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private search: SearchProvider
  ) {
    this.searchForm = formBuilder.group({
      search: ['', Validators.required],
    });
  }

  public getRandomInt() {
    const min = Math.ceil(1);
    const max = Math.floor(100000);

    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.previousTerms = this.search.searches$;
  }

  public onEnterTap(event) {
    console.log(event);
    this.navCtrl.pop();
  }

  public onSubmit() {
    this.searchTerm = {
      id: this.counter,
      term: this.searchForm.get('search').value,
    };

    console.log('this.searchTerm');
    console.log(this.searchTerm);

    this.search.updateSearch(this.searchTerm);

    this.navCtrl.pop();
  }
}
