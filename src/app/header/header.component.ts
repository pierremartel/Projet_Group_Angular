import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  logo! : string;
  search! : string;
  map! : string;

  constructor() { }

  ngOnInit(): void {
    
    this.logo = './assets/logo_icon/logo.png';
    this.search = './assets/logo_icon/search.svg';
    this.map = './assets/logo_icon/carte.png';
  }

}
