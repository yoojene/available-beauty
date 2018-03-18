import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Plugins, CameraResultType } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
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
export class EditUserProfilePage {
  image: SafeResourceUrl;

  editProfileTitle = 'Edit Profile';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sanitizer: DomSanitizer
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserProfilePage');
  }

  async takePhoto() {
    console.log('takePhoto');
    const { Camera } = Plugins;

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    }).catch(err => console.error(err));

    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.base64Data
    );
  }
}
