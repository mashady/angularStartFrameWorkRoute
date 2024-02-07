import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  @Input() title: string = 'portfolio component';
  @Input() color: string = '#2c3e50';

  projects: string[] = [
    'https://routeegy.github.io/startFramework/assets/images/poert1.png',
    'https://routeegy.github.io/startFramework/assets/images/port2.png',
    'https://routeegy.github.io/startFramework/assets/images/port3.png',
    'https://routeegy.github.io/startFramework/assets/images/poert1.png',
    'https://routeegy.github.io/startFramework/assets/images/port2.png',
    'https://routeegy.github.io/startFramework/assets/images/port3.png',
  ];
  constructor() {
    console.log(this.projects);
  }
}
