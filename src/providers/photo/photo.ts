import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { File, FileReader } from '@ionic-native/file';
import * as firebase from 'firebase';
import { Platform } from 'ionic-angular';
/*
  Generated class for the PhotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

declare const resolveLocalFileSystemURL;
@Injectable()
export class PhotoProvider {
  photos: Array<any> = [];

  constructor(
    public camera: Camera,
    public imagePicker: ImagePicker,
    public file: File,
    public plt: Platform
  ) {
    console.log('Hello PhotoProvider Provider');
  }
  /**
   * Cordova camera, take photo
   *
   * @param {any} sourceType
   * @returns
   * @memberof PhotoProvider
   */
  public takePhoto(sourceType) {
    let options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    return this.camera.getPicture(options).then(imagePath => {
      console.log(imagePath);
      let fullPath;
      if (this.plt.is('ios')) {
        fullPath = 'file://' + imagePath;
      } else {
        fullPath = imagePath;
      }
      return fullPath;
    });
  }

  public getOneLibraryPicture() {
    let options = {
      maximumImagesCount: 1,
      width: 500,
      height: 500,
      quality: 100
    }
    let photo;

    return this.imagePicker.getPictures(options).then(
      res => {
        console.log(res);
        for (let i = 0; i < 1; i++) {
          let fullPath;
          if (this.plt.is('ios')) {
            fullPath = 'file://' + res[i];
          } else {
            fullPath = res[i];
          }
          let path = fullPath.substring(0, fullPath.lastIndexOf('/'));

          photo = {photoFullPath: fullPath, path: path}
          //photos.push({ photoFullPath: fullPath, path: path });
        }
        return Promise.resolve(photo);
      },
      err => {
        console.error(err);
      }
      //file_uris => this._navCtrl.push(GalleryPage, {images: file_uris}),
      //err => console.log('uh oh')
    );
  }

  /**
   * Cordova image picker, select image from library
   *
   * @returns
   * @memberof PhotoProvider
   */
  public getLibraryPictures() {
    let options = {};
    let photos = [];
    return this.imagePicker.getPictures(options).then(
      res => {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          let fullPath;
          if (this.plt.is('ios')) {
            fullPath = 'file://' + res[i];
          } else {
            fullPath = res[i];
          }
          let path = fullPath.substring(0, fullPath.lastIndexOf('/'));

          photos.push({ photoFullPath: fullPath, path: path });
        }
        return Promise.resolve(photos);
      },
      err => {
        console.error(err);
      }
    );
  }
  /**
   * Add photo to Firebase Storage as base64 string
   * TODO: create filename convention?  Using default
   * @param {*} photo
   * @returns
   * @memberof PhotoProvider
   */
  public pushPhotoToStorage(photo: any) {
    let storageRef = firebase.storage().ref();

    let photoPromises = [];

    photo.forEach(el => {
      console.log(el);
      let promise = storageRef
        .child(`stylistGalleryImages/${el.photoFileName}`)
        .putString(el.photoBase64Data, 'data_url');

      photoPromises.push(promise);
    });

    console.log(photoPromises);

    return Promise.all([photoPromises]);
  }
  /**
   * Util method to get base64 data for image
   *
   * @param {string} fullPath
   * @param {string} [path]
   * @returns
   * @memberof PhotoProvider
   */
  public getBase64Data(fullPath: string, path?: string) {
    console.log('getBase64Data');
    console.log(fullPath);
    console.log(path);

    let shortPath;
    if (!path) {
      shortPath = fullPath.substring(0, fullPath.lastIndexOf('/'));
    } else {
      shortPath = path;
    }

    return this.file.resolveLocalFilesystemUrl(fullPath).then(
      res => {
        return this.file.readAsDataURL(shortPath, res.name).then(
          data => {
            this.photos.push({
              photoFullPath: fullPath,
              photoFileName: res.name,
              photoBase64Data: data
            });
            console.log(this.photos);
            return this.photos;
          },
          err => console.error(err)
        );
      },
      err => console.error(err)
    );
  }
}
