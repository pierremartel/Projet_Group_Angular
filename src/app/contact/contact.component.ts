import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  message!: string

  constructor(private http: HttpClient) {}

  onSubmitContact(value:any) {

    console.log('value:', value);

    this.http.post('http://localhost:8000/email', value).subscribe(result => {
        console.log('resultContact', result);
        if(result === true){
          this.message = 'Votre message a bien été envoyé'
        } else {
          this.message = 'Vous devez renseigner votre prénom, votre e-mail et votre message'
        }
    })

  }


}
