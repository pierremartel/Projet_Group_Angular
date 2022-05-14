import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification-customer',
  templateUrl: './authentification-customer.component.html',
  styleUrls: ['./authentification-customer.component.css']
})
export class AuthentificationCustomerComponent implements OnInit {
icon! : string;
iconArrow! : string;
iconPlus! : string;
  constructor() { }

  ngOnInit(): void {
    this.icon = './assets/logo_icon/icons_user.png';
    this.iconArrow = 'assets/logo_icon/arrow-right.svg';
    this.iconPlus = 'assets/logo_icon/plus.svg';
  }

}
