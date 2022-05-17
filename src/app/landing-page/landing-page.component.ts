import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

banniere! : string;


  constructor() { }

  ngOnInit(): void {
    this.banniere = './assets/photos/banniere.jpg';
    
    
    
    
  }

}
