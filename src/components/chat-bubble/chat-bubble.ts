import { Component, Input } from '@angular/core';
import * as firebase from 'firebase';
/**
 * Generated class for the ChatBubbleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-bubble',
  templateUrl: 'chat-bubble.html',
})
export class ChatBubbleComponent {
  @Input()
  msg: any;
  public user: any;
  constructor() {
    console.log('Hello ChatBubbleComponent Component');

    // firebase
    //   .database()
    //   .ref('/userProfile')
    //   .child(firebase.auth().currentUser.uid)
    //   .once('value')
    //   .then(res => {
    //     console.log(res.val());
    //     this.user = res.val();
    //     this.msg = {
    //       img: this.user.avatarImage,
    //       messageText: 'Am I dreaming?',
    //       position: 'left',
    //       messageDate: '12/3/2016',
    //       messageSender: 'Gregory',
    //     };
    //   });
  }

  public ngOnInit() {}

  // createMsg() {

  // }
}
