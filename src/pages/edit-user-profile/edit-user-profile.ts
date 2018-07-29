import { Component, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
} from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';
import { UserProvider } from '../../providers/user/user';
import * as firebase from 'firebase';
import { PhotoProvider } from '../../providers/photo/photo';
import { SkillsProvider } from '../../providers/skills/skills';

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
  isStylist: boolean = false;

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
  public availableSkills: any;
  public availableSkills$: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private stylist: StylistProvider,
    private updatedStylist: StylistProvider,
    private user: UserProvider,
    public photo: PhotoProvider,
    private formBuilder: FormBuilder, //private utils: UtilsProvider
    private skills: SkillsProvider
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
      avatarImage: [''],
    });
  }
  logForm() {
    console.log('something');
  }

  //Lifecycle

  public ngAfterContentInit() {}

  public ionViewDidEnter() {
    console.log(
      'getting stylistID from current user ' + firebase.auth().currentUser.uid
    );

    this.user
      .getUserById(firebase.auth().currentUser.uid)
      .valueChanges()
      .subscribe(res => {
        this.userDetails = res;
        console.log(
          'Getting details of User Name ' +
            this.userDetails.name +
            ', User ID: ' +
            firebase.auth().currentUser.uid
        );
      });

    this.user.checkIsStylist(firebase.auth().currentUser.uid).subscribe(res => {
      console.log(res);
      if (!res) {
        this.isStylist = false;
      } else {
        this.isStylist = true;
        // this.stylist
        //   .getStylist(firebase.auth().currentUser.uid)
        //   .snapshotChanges()
        //   .subscribe(res => {
        //     //let obj = { ...res[0] };
        //     //this.stylistDetails = obj;
        //     this.stylistId = res[0].key;
        //     this.getDetails(this.stylistId);
        //   });
      }
    });

    this.availableSkills$ = this.skills.getSkillGroups().snapshotChanges();
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserProfilePage');
  }

  // getDetails(stylistId: any) {
  //   console.log('getstylistprofile');
  //   this.stylist
  //     .getStylist(firebase.auth().currentUser.uid)
  //     .valueChanges()
  //     .subscribe(res => {
  //       console.log(res);
  //       let obj = { ...res[0] };
  //       this.stylistDetails = obj;

  //       console.log(
  //         'Got details of Stylist Name ' + this.stylistDetails.stylistName
  //       );
  //     });
  // }

  // Public

  public doEditBanner() {
    console.log('Getting banner from picker');
    this.photo.getOneLibraryPicture().then(res => {
      let returnedPhoto: any = res;
      // this.photo
      //   .getBase64Data(returnedPhoto.photoFullPath, returnedPhoto.path)
      //   .then(baseress => {
      //     console.log(baseress);
      // this.photo.pushPhotoToStorage(baseress).then(stores => {
      //   console.log(stores[0]);
      //   this.monitorUploadProgress(stores[0]);
      //   // Write stores to DB
      // });
      // });
    });

    //UPDATE IMAGE ON PAGE
  }

  public doEditAvatar() {
    console.log('Getting avatar from picker');
    this.photo.getOneLibraryPicture().then(res => {
      let returnedPhoto: any = res;
      // this.photo
      //   .getBase64Data(returnedPhoto.photoFullPath, returnedPhoto.path)
      //   .then(baseress => {
      //     console.log(baseress);
      //     // this.photo.pushPhotoToStorage(baseress).then(stores => {
      //     //   console.log(stores[0]);
      //     //   this.monitorUploadProgress(stores[0]);
      //     //   // Write stores to DB
      //     // });
      //   });
    });
  }

  public doSave() {
    if (this.editUserForm.valid) {
      const updatedUser = this.editUserForm.value;

      console.log('stylist name = ' + updatedUser.stylistName);

      if (this.isStylist) {
        // isStylist == true.  Is a Stylist
        updatedUser.baseLocation = this.userDetails.baseLocation; // Not sure we need this now?
        // updatedUser.bannerImage = this.userDetails.bannerImage // This needs not to be undefined
        console.log('is a stylist');
        console.log(updatedUser);
      }

      //  Update skills for user
      console.log('available skills : ' + this.availableSkills$);
      this.stylist.setStylistSkills(
        firebase.auth().currentUser.uid,
        this.availableSkills$
      );

      this.user
        .updateUserProfile(firebase.auth().currentUser.uid, updatedUser, true)
        .then(() => this.navCtrl.pop());
    }
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
            (snapshot.bytesTransferred / snapshot.totalBytes) *
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
