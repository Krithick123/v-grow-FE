import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'; 
import { CommonModule, isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderNavComponent,FontAwesomeModule,ContactUsComponent,HeroComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'v-grow';
  faArrowAltCircleUp=faArrowAltCircleUp;
  isShowScrollTop:boolean=false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  @HostListener('window:scroll', ['$event'])
  scrollCheck(){
    console.log(window.scrollY);
    if(window.scrollY > 100){
      this.isShowScrollTop=true;
    }else{
      this.isShowScrollTop=false;
    }
  }

  scrollToTop(){
    if (typeof window !== 'undefined') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

}
