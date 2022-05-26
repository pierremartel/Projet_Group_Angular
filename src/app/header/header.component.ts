import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  logo! : string;
  search! : string;
  map! : string;
  userEmail! : string | null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.logo = './assets/logo_icon/logo.png';
    this.search = './assets/logo_icon/search.svg';
    this.map = './assets/logo_icon/carte.png';
    this.userEmail = sessionStorage.getItem('email');
    }

    onResearchSubmit(value:any){
      console.log(value);
       this.http.get('http://localhost:8000/research/' + value.research).subscribe(result => {
        console.log('dataResearch', result);
    })}
    }
  
