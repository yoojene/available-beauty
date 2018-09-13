import { Component, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  ActionSheetController,
  Platform,
} from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import * as firebase from 'firebase';
import { PhotoProvider } from '../../providers/photo/photo';
import { SkillsProvider } from '../../providers/skills/skills';
import { Camera } from '@ionic-native/camera';

import { FirebaseStoragePaths } from '../../config/firebase.config';

@IonicPage()
@Component({
  selector: 'page-edit-user-profile',
  templateUrl: 'edit-user-profile.html',
})
export class EditUserProfilePage implements AfterContentInit {
  public isStylist = false;

  public stylistId: any;
  public userId: any;
  public stylistDetails: any;
  public userDetails: any;
  public editUserForm: FormGroup;
  // @ViewChild('navBar') navbar: Navbar;

  public editProfileTitle = 'Edit Profile';
  public stylistName = 'Salon Name';
  public address1Line = 'Address Line 1';
  public address2Line = 'Address Line 1';
  public addressTown = 'Town';
  public addressCounty = 'County';
  public addressPostcode = 'Postcode';
  public bio = 'Bio';
  public mobileStylist = 'Mobile Stylist?';
  public mobileRange = 'Mobile Range';
  public location = 'Base Location';
  public userName = 'User Name';
  public phoneNumber = 'Phone Number';
  public emailAddress = 'Email';
  public setStylistSkills = 'Stylist Skills';
  public stylistSkills = 'Stylist Skills';

  public loadProgress: any = 0;
  public downloadUrls = [];
  public availableSkills: any;
  public availableSkills$: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private plt: Platform,
    private userProvider: UserProvider,
    private user: UserProvider,
    public photo: PhotoProvider,
    private formBuilder: FormBuilder,
    private skills: SkillsProvider,
    public camera: Camera,
    private actionSheetCtrl: ActionSheetController
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
      stylistSkills: [''],
    });
  }
  public logForm() {
    console.log('something');
  }

  // Lifecycle

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

    this.availableSkills$.subscribe(res => console.log(res));
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

  /**
   * Camera / Library action sheet
   *
   */
  public showImageActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: async () => {
            const res = await this.photo.getOneLibraryPicture();
            console.log(res);
            const base64 = await this.photo.getBase64Data(
              res.photoFullPath,
              res.path
            );
            console.log(base64);
            const storage = await this.photo.pushPhotoToStorage(
              base64.photoFileName,
              base64.photoBase64Data,
              FirebaseStoragePaths.userAvatar
            );
            await this.photo.addAvatarToUserProfile(storage.downloadURL);
          },
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.photo
              .takePhoto(this.camera.PictureSourceType.CAMERA)
              .then(async res => {
                console.log(res);
                const fullPath = res;
                // let fullPath;
                // if (this.plt.is('ios')) {
                //   fullPath = 'file://' + res;
                // } else {
                //   fullPath = res;
                // }

                let path = fullPath.substring(0, fullPath.lastIndexOf('/'));
                const base64 = await this.photo.getBase64Data(fullPath, path);

                const storage = await this.photo.pushPhotoToStorage(
                  base64.photoFileName,
                  base64.photoBase64Data,
                  FirebaseStoragePaths.userAvatar
                );

                await this.photo.addAvatarToUserProfile(storage.downloadURL);
              });
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    actionSheet.present();
  }

  public doEditBanner() {
    console.log('Getting banner from picker');
    this.photo.getOneLibraryPicture().then(async res => {
      const base64 = await this.photo.getBase64Data(
        res.photoFullPath,
        res.path
      );

      console.log(base64);

      const storage = await this.photo.pushPhotoToStorage(
        base64.photoFileName,
        base64.photoBase64Data,
        FirebaseStoragePaths.userAvatar
      );

      await this.photo.addBannerToUserProfile(storage.downloadURL);
    });

    //UPDATE IMAGE ON PAGE
  }

  public doEditAvatar() {
    console.log('Getting avatar from picker');
    this.photo.getOneLibraryPicture().then(async res => {
      // let returnedPhoto: any = res;

      console.log(res);

      const base64 = await this.photo.getBase64Data(
        res.photoFullPath,
        res.path
      );

      console.log(base64);

      const storage = await this.photo.pushPhotoToStorage(
        base64.photoFileName,
        base64.photoBase64Data,
        FirebaseStoragePaths.userAvatar
      );

      await this.photo.addAvatarToUserProfile(storage.downloadURL);
    });
  }

  public doSave() {
    console.log('saving');
    if (this.editUserForm.valid) {
      const updatedUser = this.editUserForm.value;

      console.log('stylist name = ' + updatedUser.stylistName);

      if (this.isStylist) {
        // isStylist == true.  Is a Stylist
        // updatedUser.baseLocation = this.userDetails.baseLocation; // Not sure we need this now?
        // updatedUser.bannerImage = this.userDetails.bannerImage // This needs not to be undefined
        console.log('is a stylist');
        console.log(updatedUser);

        this.userProvider.setStylistSkills(
          firebase.auth().currentUser.uid,
          updatedUser.stylistSkills
        );
      }

      this.user
        .updateUserProfile(firebase.auth().currentUser.uid, updatedUser, true)
        .then(() => this.navCtrl.pop());
    }
  }

  public doCancel() {
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
