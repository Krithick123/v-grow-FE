import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
})
export class HeaderNavComponent {
  isActive: boolean = true;
  showScrollBar: boolean = false;
  screenWidth: any;
  constructor() {
    // Check initial screen size when the component is initialized
    this.setMenuStateBasedOnScreenWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = (event.target as Window).innerWidth;
    this.setMenuStateBasedOnScreenWidth(this.screenWidth);
  }

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    console.log(window.scrollY);
    if (window.scrollY > 100) {
      this.showScrollBar = true;
    } else {
      this.showScrollBar = false;
    }
  }

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }

  private setMenuStateBasedOnScreenWidth(screenWidth: number): void {
    this.isActive = screenWidth > 992;
  }

  closeToggle() {
    if (this.screenWidth < 992) {
      this.isActive = !this.isActive;
    }
  }
}
