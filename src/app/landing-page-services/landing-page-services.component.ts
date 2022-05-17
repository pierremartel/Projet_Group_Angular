import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-services',
  templateUrl: './landing-page-services.component.html',
  styleUrls: ['./landing-page-services.component.css']
})
export class LandingPageServicesComponent implements OnInit {
farmer! : string;
world! : string;
delivery! : string;
bag! : string;
  constructor() { }

  ngOnInit(): void {
    this.farmer = './assets/logo_icon/farmer.png';
    this.world = './assets/logo_icon/world.png';
    this.delivery = './assets/logo_icon/delivery-truck.png';
    this.bag = './assets/logo_icon/bags.png';
  }

}
