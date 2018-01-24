import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import * as firebase from 'firebase';
/*
  Generated class for the PhotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhotoProvider {
  constructor(
    public camera: Camera,
    public imagePicker: ImagePicker,
    public file: File
  ) {
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

  public getPictures() {
    let options = {};

    this.imagePicker.getPictures(options).then(
      res => {
        for (let i = 0; i < res.length; i++) {
          console.log('Image URI: ' + res[i]);

          this.file.createFile(res[i], 'test.jpg', false).then(
            fileEntry => {
              console.log(fileEntry);
            },
            err => {
              console.error(err);
            }
          );

          // this.file.resolveLocalFilesystemUrl(res[i]).then(
          //   fileEntry => {
          //     console.log(fileEntry);
          //     console.log(fileEntry.isFile);
          //     // this.file
          //     //   .getFile(res, 'image.jpg', { create: false })
          //     //   .then(fileEntry => {
          //     //     console.log(fileEntry.file);
          //     //   });
          //   },
          //   err => {
          //     console.error(err);
          //   }
          // );
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  public pushPhotoToStorage(filename) {
    console.log(filename);
    let storageRef = firebase.storage().ref();

    let uploadTask = storageRef
      .child(`stylistAvatarImages/${filename}`)
      .put(filename);

    // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
    //     // upload in progress
    //     fir.progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
    //   }, error => {
    //     // upload failed
    //     console.log(error);
    //   }, () => {
    //     // upload success
    //     upload.url = uploadTask.snapshot.downloadURL;
    //     upload.name = upload.file.name;
    //     this.saveFileData(upload);
    //   });
  }
}
