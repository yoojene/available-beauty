import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {
  }

  getStorage(key){

    return Observable.fromPromise(this.storage.get(key));
  }

  setStorage(key, value) {

    return Observable.fromPromise(this.storage.set(key, value));


  }

}
