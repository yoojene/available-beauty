import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Camera } from '@ionic-native/camera';

/*
  Generated class for the PhotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhotoProvider {
  constructor(public camera: Camera) {
    console.log('Hello PhotoProvider Provider');
  }

  public takePhoto(sourceType) {
    let options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      console.log(imagePath);
    });
  }
}
