import { Component, AfterContentInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';
import * as firebase from 'firebase';
import { PhotoProvider } from '../../providers/photo/photo';

//import { UtilsProvider } from '../../providers/utils/utils';
//import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the EditUserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-user-profile',
  templateUrl: 'edit-user-profile.html',
})
export class EditUserProfilePage implements AfterContentInit {
  stylistId: any;
  stylistDetails: any;
  // @ViewChild('navBar') navbar: Navbar;

  editProfileTitle = 'Edit Profile';
  stylistName = 'Salon Name';
  address1Line = 'Address Line 1';
  address2Line = 'Address Line 1';
  addressTown = 'Town';
  addressCounty = 'County';
  addressPostcode = 'Postcode';
  bio = 'Bio';

  public loadProgress: any = 0;
  public downloadUrls: Array<any> = [];
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private stylist: StylistProvider,
    public photo: PhotoProvider,
    //private utils: UtilsProvider
  ) {

  }

  ngAfterContentInit() {

  }

  ionViewDidEnter() {
    console.log('getting stylistID from current user ' + firebase.auth().currentUser.uid);

    this.stylist
    .getStylist(firebase.auth().currentUser.uid)
    .snapshotChanges()
    .subscribe(res => {
      //let obj = { ...res[0] };
      //this.stylistDetails = obj;
      this.stylistId = res[0].key;
      this.getDetails(this.stylistId);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserProfilePage');
  }

  getDetails(stylistId: any) {

    console.log('getstylistprofile');
    this.stylist
      .getStylist(firebase.auth().currentUser.uid)
      .valueChanges()
      .subscribe(res => {
        console.log(res);
        let obj = { ...res[0] };
        this.stylistDetails = obj;

        console.log(obj);
      });

  }

  doEditBanner() {
    console.log('Getting photo from picker');
    this.photo.getLibraryPictures().then(res => {
      let returnedPhoto: any = res;
      this.photo
        .getBase64Data(returnedPhoto.photoFullPath, returnedPhoto.path)
        .then(baseress => {
          console.log(baseress);
          this.photo.pushPhotoToStorage(baseress).then(stores => {
            console.log(stores[0]);
            this.monitorUploadProgress(stores[0]);
          });
        });
    });

    //UPDATE IMAGE ON PAGE
  }

  public monitorUploadProgress(tasks) {
    console.log('monitorUploadProgress');

    tasks.forEach(task => {
      console.log(task);
      task.on(
        'state_changed',
        (snapshot: any) => {
          this.loadProgress = (
            snapshot.bytesTransferred /
            snapshot.totalBytes *
            100
          ).toFixed(2);
          // this.loadProgress.push(prog);
          // console.log(this.loadProgress);
          console.log('Upload is ' + this.loadProgress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
          // return progress;
        },
        err => {
          console.error(err);
        },
        () => {
          console.log('success!');
          // Need the URLs for RTDB update
          this.downloadUrls.push(task.snapshot.downloadURL);
        }
      );
    });
  }

  // ngAfterViewInit() {
  //   console.log('after view innniiiittt');
  //   console.log(this.navbar.setBackButtonText(''));
  // }
}
