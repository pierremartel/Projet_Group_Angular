import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-authentification-customer',
  templateUrl: './authentification-customer.component.html',
  styleUrls: ['./authentification-customer.component.css']
})
export class AuthentificationCustomerComponent implements OnInit {
icon! : string;
iconArrow! : string;
iconPlus! : string;


registerError : any = [];

session : any = false;


  constructor(private http: HttpClient) {}

  
 


  ngOnInit(): void {
    this.icon = './assets/logo_icon/icons_user.png';
    this.iconArrow = 'assets/logo_icon/arrow-right.svg';
    this.iconPlus = 'assets/logo_icon/plus.svg';
    
  }


  onSubmit(value:any) {
    console.log('register')
    
        this.http.post('http://localhost:8000/inscription', value).subscribe(result => {
        console.log('dataRegister', result);
        if(result !== true){
          this.registerError = result
      }
    })}

     onSubmitLogin(value:any) {
       console.log('login')
       console.log(value)
      this.http.post('http://localhost:8000/login', value).subscribe(result => {
        console.log('dataLogin', result);
        this.session = result;
      //   if(result !== true){
      //     this.registerError = result
      // }
    })
    }
    
  }



  



