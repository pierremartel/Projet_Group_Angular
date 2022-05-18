import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-comments',
  templateUrl: './landing-page-comments.component.html',
  styleUrls: ['./landing-page-comments.component.css']
})
export class LandingPageCommentsComponent implements OnInit {

  icon_star! : string;
  constructor() { }

  ngOnInit(): void {
    this.icon_star = './assets/logo_icon/etoile.png';
  }

}
