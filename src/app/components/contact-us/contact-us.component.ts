import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';



@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor() {}
  sendMessageForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(12),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    contactNum: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    message: new FormControl('', [Validators.required]),
  });
  get firstName() {
    return this.sendMessageForm.get('firstName');
  }
  get lastName() {
    return this.sendMessageForm.get('lastName');
  }
  get email() {
    return this.sendMessageForm.get('email');
  }
  get contactNum() {
    return this.sendMessageForm.get('contactNum');
  }
  get message() {
    return this.sendMessageForm.get('message');
  }

  async onSubmit() {
    if (this.sendMessageForm.valid) {
      // emailjs.init('tZSANNsACFuPSce4R');
      // let response = await emailjs.send('service_5jmne9d', 'template_wnikr44', {
      //   message: this.sendMessageForm.value.message,
      //   firstName: this.sendMessageForm.value.firstName,
      //   lastName: this.sendMessageForm.value.lastName,
      //   email: this.sendMessageForm.value.email,
      //   contactNum: this.sendMessageForm.value.contactNum,
      // });
      console.log(this.sendMessageForm.value);
      // this.toast.info({
      //   detail: 'SUCCESS',
      //   summary: 'FORM HAS SUBMITTED SUCCESSFULLY',
      //   duration: 5000,
      // });
      this.sendMessageForm.reset();
    }
  }
}
