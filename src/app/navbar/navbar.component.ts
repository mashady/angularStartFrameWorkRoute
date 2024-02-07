import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  paddingExist = true;
  @HostListener('window:scroll', ['$event'])
  onScroll($event: any) {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      this.paddingExist = false;
    } else {
      this.paddingExist = true;
    }
  }
}
