import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,ContactUsComponent,ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
