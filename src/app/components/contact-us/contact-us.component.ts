import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FontAwesomeModule,ReactiveFormsModule,CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedin;
  faFacebook = faFacebook;
  cloOneContent = {
    mail: 'connect@itechglobalsolutions.in',
    address: 'Coimbatore,Tamil Nadu, India.',
    phone: '+91 98942 15407',
  };
  constructor(){}
  contactForm = new FormGroup({
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
    return this.contactForm.get('firstName');
  }
  get lastName() {
    return this.contactForm.get('lastName');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get contactNum() {
    return this.contactForm.get('contactNum');
  }
  get message() {
    return this.contactForm.get('message');
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      // emailjs.init('tZSANNsACFuPSce4R');
      // let response = await emailjs.send('service_5jmne9d', 'template_wnikr44', {
      //   message: this.contactForm.value.message,
      //   firstName: this.contactForm.value.firstName,
      //   lastName: this.contactForm.value.lastName,
      //   email: this.contactForm.value.email,
      //   contactNum: this.contactForm.value.contactNum,
      // });
      console.log(this.contactForm.value);
      // this.toast.info({
      //   detail: 'SUCCESS',
      //   summary: 'FORM HAS SUBMITTED SUCCESSFULLY',
      //   duration: 5000,
      // });
      this.contactForm.reset();
    }
  }

}
