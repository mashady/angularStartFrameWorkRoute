import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  title: string = 'contact section';
  color: string = '#2c3e50';

  animateUserName: boolean = false;
  animateUserAge: boolean = false;
  animateUserEmail: boolean = false;
  animateUserPassword: boolean = false;
  userName: string = '';
  userAge: string = '';
  userEmail: string = '';
  userPassword: string = '';
  userNameInput($event: Event) {
    if (this.userName === '') {
      console.log('user name empty');
      this.animateUserName = false;
    } else {
      console.log('username is ready to animated');
      this.animateUserName = true;
    }
  }
  userAgeInput($event: Event) {
    if (this.userAge === '') {
      console.log('user name empty');
      this.animateUserAge = false;
    } else {
      console.log('username is ready to animated');
      this.animateUserAge = true;
    }
  }
  userEmailInput($event: Event) {
    if (this.userEmail === '') {
      console.log('user name empty');
      this.animateUserEmail = false;
    } else {
      console.log('username is ready to animated');
      this.animateUserEmail = true;
    }
  }
  userPasswordInput($event: Event) {
    if (this.userPassword === '') {
      console.log('user name empty');
      this.animateUserPassword = false;
    } else {
      console.log('username is ready to animated');
      this.animateUserPassword = true;
    }
  }
}
