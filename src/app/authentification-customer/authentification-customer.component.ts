import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
subscribeMessage : any = [];
loginMessage! : string;
loginResult : any;



  constructor(private http: HttpClient, private router: Router,) {}

  
  ngOnInit(): void {
    this.icon = './assets/logo_icon/icons_user.png';
    this.iconArrow = 'assets/logo_icon/arrow-right.svg';
    this.iconPlus = 'assets/logo_icon/plus.svg';
    
  }


  onSubmit(value:any) {
    console.log('register')
        this.subscribeMessage = [];
    
        this.http.post('http://localhost:8000/inscription', value).subscribe(result => {
          //  let decodeResult = JSON.parse(result)
        console.log('dataRegister', result);
        if(result !== true){
          this.registerError = result;
          for(let i = 0; i < this.registerError.length; i++)
          {
            this.subscribeMessage.push(this.registerError[i][0].message)           
          }
        } else {
          this.router.navigate(['']);
        }
    })}

    onSubmitLogin(value:any) {
      if(!value.email || !value.password){
        this.loginMessage = 'Vous devez renseigner tous les champs'
        return
      }
      console.log('register', value)
      this.http.post('http://localhost:8000/login', value).subscribe(result => {
        this.loginResult = result
        if(!this.loginResult.validation){
          this.loginMessage = this.loginResult[0]
        } else {
          this.session = this.loginResult.session;
        sessionStorage.setItem('name', this.session.user.username);
        sessionStorage.setItem('firstname', this.session.user.userfirstname);
        sessionStorage.setItem('email', this.session.user.email);
        sessionStorage.setItem('address', this.session.user.address);
        sessionStorage.setItem('postalcode', this.session.user.postalcode);
        sessionStorage.setItem('city', this.session.user.city);
        sessionStorage.setItem('role', this.session.user.role);
        sessionStorage.setItem('id', this.session.user.id);

        }

        this.router.navigate(['']);
        
   })
    }
    
  }



  



