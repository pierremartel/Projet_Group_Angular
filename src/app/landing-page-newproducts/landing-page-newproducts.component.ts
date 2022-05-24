import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page-newproducts',
  templateUrl: './landing-page-newproducts.component.html',
  styleUrls: ['./landing-page-newproducts.component.css']
})
export class LandingPageNewproductsComponent implements OnInit {
  arrow_g! : string;
  arrow_d! : string;

  
    constructor(private http: HttpClient, private router: Router) { }

    newProducts = [];
  
    ngOnInit(): void {
    this.arrow_g = './assets/logo_icon/arrow_gauche.png';
    this.arrow_d = './assets/logo_icon/arrow_droite.png';

    this.http.get<any>('http://localhost:8000/nouveautes').subscribe(data => {
      console.log(data);

      for (let i = 0; i < data.length; i++){
       data[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + data[i].imageFileName
      }
          console.log(data);
          this.newProducts = data
           })

     
    }

    onShowProducts():void {
      this.router.navigateByUrl('promotion')
    }

}
