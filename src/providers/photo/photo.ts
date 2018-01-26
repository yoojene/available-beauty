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

  public getLibraryPictures() {
    let options = {};

    return this.imagePicker.getPictures(options).then(
      res => {
        for (let i = 0; i < res.length; i++) {
          (i => {
            // Call in anon function to ensure photos is populated
            console.log('Image URI: ' + res[i]);

            let fullPath;
            if (this.plt.is('ios')) {
              fullPath = 'file://' + res[i];
            } else {
              fullPath = res[i];
            }
            let path = fullPath.substring(0, fullPath.lastIndexOf('/'));

            this.file.resolveLocalFilesystemUrl(fullPath).then(res => {
              this.file.readAsDataURL(path, res.name).then(data => {
                return this.photos.push({
                  photoFullPath: fullPath,
                  photoBase64Data: data
                });
              });
            });
          })(i);
        }

        console.log(this.photos);
        return this.photos;

        // console.log(fullPath);
        // console.log('resolveLocaLFSURL window');

        // let reader = new FileReader()

        // resolveLocalFileSystemURL(
        //   fullPath,
        //   res => {
        //     console.log(res);
        //     console.log('read as data URL');
        //     this.file.readAsDataURL(path, res.name).then(data => {
        //       // console.log(data);
        //       this.photosBase64.push(data);
        //     });
        //   },
        //   err => {
        //     console.error(err);
        //   }
        // );
        // this.file.resolve;
        // this.file.readAsDataURL(path, name).then(
        //   res => {
        //     console.log(res);
        //   },
        //   err => {
        //     console.error(err);
        //   }
        // );

        // this.file.createFile(res[i], 'test.jpg', false).then(
        //   fileEntry => {
        //     console.log(fileEntry);
        //   },
        //   err => {
        //     console.error(err);
        //   }
        // );

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

        // return this.photosBase64;

        // console.log(this.photosBase64);
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
