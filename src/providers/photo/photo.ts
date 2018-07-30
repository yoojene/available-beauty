import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { File, FileReader } from '@ionic-native/file';
import * as firebase from 'firebase';
import { Platform } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from 'angularfire2/storage';
import { UploadTask } from '../../../node_modules/@firebase/storage-types';
import { FirebaseStoragePaths } from '../../config/firebase.config';
/*
  Generated class for the PhotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class PhotoProvider {
  photos: Array<any> = [];

  constructor(
    public camera: Camera,
    public imagePicker: ImagePicker,
    public file: File,
    public plt: Platform,
    private afdb: AngularFireDatabase,
    private afstorage: AngularFireStorage
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
      correctOrientation: true,
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
      quality: 100,
    };
    let photo = {} as any;

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

          photo.photoFullPath = fullPath;
          photo.path = path;
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
  public getLibraryPictures(): Promise<any> {
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
        // return Promise.resolve(photos);
        return photos;
      },
      err => {
        console.error(err);
      }
    );
  }

  /**
   * Add photo to Firebase Storage as base64 ('data_url') string
   * TODO: create filename convention?  Using default
   */
  public pushPhotoToStorage(
    filename: string,
    imgstr: string,
    filestorepath?: string
  ): UploadTask {
    let path = filestorepath;
    if (!filestorepath) {
      path = FirebaseStoragePaths.stylistGallery;
    }
    const storageRef = this.afstorage.storage.ref(`${path}/${filename}`);
    try {
      return storageRef.putString(imgstr, 'data_url');
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Util method to get base64 data for image from local filesystem
   * and return as object
   *
   */
  public getBase64Data(fullPath: string, path: string): Promise<any> {
    let photos = {} as any;

    return this.file.resolveLocalFilesystemUrl(fullPath).then(
      res => {
        return this.file.readAsDataURL(path, res.name).then(
          data => {
            photos.photoFullPath = fullPath;
            photos.photoFileName = res.name;
            photos.photoBase64Data = data;
            console.log(photos);
            return photos;
          },
          err => console.error(err)
        );
      },
      err => console.error(err)
    );
  }

  /**
   * Add photo(s) to RTDB userProfile/galleryImages as an array
   *
   */
  public addPhotosToUserGallery(urls: Array<any>) {
    const uid = firebase.auth().currentUser.uid;
    let galleryPayload = {};
    galleryPayload[`userProfile/${uid}/galleryImages/`] = urls;

    return this.afdb.database
      .ref()
      .update(galleryPayload)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }
  /**
   *
   * Add photo to RTDB userProfile/avatarImage
   */
  public addAvatarToUserProfile(url: string) {
    const uid = firebase.auth().currentUser.uid;
    let avatarPayload = {};
    avatarPayload[`userProfile/${uid}/avatarImage`] = url;

    return this.afdb.database
      .ref()
      .update(avatarPayload)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }
  /**
   *
   * Add photo to RTDB userProfile/bannerImage
   */
  public addBannerToUserProfile(url: string) {
    const uid = firebase.auth().currentUser.uid;
    let bannerPayload = {};
    bannerPayload[`userProfile/${uid}/bannerImage`] = url;

    return this.afdb.database
      .ref()
      .update(bannerPayload)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }
}
