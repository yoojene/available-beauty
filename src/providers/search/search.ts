import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  search(term) {
    console.log('searching for: ' + term);

    let url = 'https://us-central1-available-beauty-1511287868565.cloudfunctions.net/searchStylists'
    let params: URLSearchParams = new URLSearchParams();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
     };

    this.http.get(url, httpOptions).subscribe(res => {
      return res;
    });
  }
}
