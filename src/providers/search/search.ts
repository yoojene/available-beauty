import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {
  searches$: Observable<any> = this.http.get('http://localhost:3004/search');

  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
  }

  updateSearch(term) {
    console.log(term);
    this.http
      .post('http://localhost:3004/search', term)
      .subscribe(res => console.log(res));
  }
}
