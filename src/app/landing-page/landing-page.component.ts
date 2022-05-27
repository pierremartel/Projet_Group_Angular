import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
 
banniere! : string;



  constructor( private router:Router) { }

  ngOnInit(): void {
    this.banniere = './assets/photos/paleo-table.jpg';
    
  }



  onShowProducts(): void {
    this.router.navigateByUrl('produits');
  }

  

}
