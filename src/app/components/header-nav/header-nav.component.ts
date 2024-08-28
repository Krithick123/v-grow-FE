import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {
  isActive = true;
  constructor() {
    // Check initial screen size when the component is initialized
    this.setMenuStateBasedOnScreenWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const screenWidth = (event.target as Window).innerWidth;
    this.setMenuStateBasedOnScreenWidth(screenWidth);
  }

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }

  private setMenuStateBasedOnScreenWidth(screenWidth: number): void {
    this.isActive = screenWidth > 992;
  }
}
