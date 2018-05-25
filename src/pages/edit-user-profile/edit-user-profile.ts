import { Component, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist'; 
import { UserProvider } from '../../providers/user/user';
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
  userId: any;
  stylistDetails: any;
  userDetails: any;
  public editUserForm: FormGroup;
  // @ViewChild('navBar') navbar: Navbar;

  editProfileTitle = 'Edit Profile';
  stylistName = 'Salon Name';
  address1Line = 'Address Line 1';
  address2Line = 'Address Line 1';
  addressTown = 'Town';
  addressCounty = 'County';
  addressPostcode = 'Postcode';
  bio = 'Bio';
  mobileStylist = 'Mobile Stylist?';
  mobileRange = 'Mobile Range';
  location = 'Base Location';
  userName = 'User Name';
  phoneNumber = 'Phone Number';
  emailAddress = 'Email';

  public loadProgress: any = 0;
  public downloadUrls: Array<any> = [];
  
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private stylist: StylistProvider,
    private updatedStylist: StylistProvider,
    private user: UserProvider,
    public photo: PhotoProvider,
    private formBuilder: FormBuilder
    //private utils: UtilsProvider
  ) {

    this.editUserForm = formBuilder.group({
      stylistName: [''],
      addressLine1: [''],
      addressLine2: [''],
      addressTownCity: [''],
      addressCounty: [''],
      addressPostcode: [''],
      bio: [''],
      mobile: [''],
      mobileRange: [''],
      baseLocation: [''],
      name: [''],
      phoneNumber: [''],
      emailAddress: [''],
      location: [''],
      bannerImage: [''],
      avatarImage: ['']
    });
  }
  logForm(){
    console.log('something');
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

    this.user
    .getUserById(firebase.auth().currentUser.uid)
    .valueChanges()
    .subscribe(res => {
      this.userDetails = res;
      console.log('Getting details of User Name ' + this.userDetails.name + ', User ID: ' + firebase.auth().currentUser.uid);
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

        console.log('Got details of Stylist Name ' + this.stylistDetails.stylistName);
      });


  }

  doEditBanner() {
    console.log('Getting banner from picker');
    this.photo.getOneLibraryPicture().then(res => {
      let returnedPhoto: any = res;
      this.photo
        .getBase64Data(returnedPhoto.photoFullPath, returnedPhoto.path)
        .then(baseress => {
          console.log(baseress);
          this.photo.pushPhotoToStorage(baseress).then(stores => {
            console.log(stores[0]);
            this.monitorUploadProgress(stores[0]);
            // Write stores to DB
          });
        });
    });

    //UPDATE IMAGE ON PAGE
  }

  doEditAvatar() {
    console.log('Getting avatar from picker');
    this.photo.getOneLibraryPicture().then(res => {
      let returnedPhoto: any = res;
      this.photo
        .getBase64Data(returnedPhoto.photoFullPath, returnedPhoto.path)
        .then(baseress => {
          console.log(baseress);
          this.photo.pushPhotoToStorage(baseress).then(stores => {
            console.log(stores[0]);
            this.monitorUploadProgress(stores[0]);
            // Write stores to DB
          });
        });
    });
  
  }

  doSave() {

    if (this.editUserForm.valid) {
      let updatedStylist = this.editUserForm.value;
      let updatedUser = this.editUserForm.value;

      console.log('stylist name = ' + updatedStylist.stylistName);
      updatedStylist.baseLocation = this.stylistDetails.baseLocation;
      updatedStylist.bannerImage = this.stylistDetails.bannerImage;

      console.log(JSON.stringify(updatedStylist));

      return Promise.all([
        this.stylist.updateStylistProfile(this.stylistId, updatedStylist),
        this.user.updateUserProfile(firebase.auth().currentUser.uid, updatedUser),
        this.navCtrl.pop()
      ]);
    } else {
      console.log('something invalid');
    } 

    // this.stylist.updateStylistProfile(this.stylistId, this.stylistDetails).then(res => {
    //   console.log('Updating stylist: with new name ' + this.stylistDetails.stylistName, res);
    //   this.navCtrl.pop();
    // });
    
    //  Create updateStylistProfile...

    //Do the same with user details
  }

  doCancel() {
    console.log('Cancel');
    this.navCtrl.pop();
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
