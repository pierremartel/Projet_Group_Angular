import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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




  // picture! : string;
   Products = [] ;

  constructor(private http: HttpClient,
              private router : Router) { }


  ngOnInit(): void {
    
    this.logo = './assets/logo_icon/logo.png';
    this.search = './assets/logo_icon/search.svg';
    this.map = './assets/logo_icon/carte.png';
    this.userEmail = sessionStorage.getItem('email');

    // this.http.get<any>('http://localhost:8000/products').subscribe(data => {

    //   for (let i = 0; i < data.length; i++){
    //    data[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + data[i].imageFileName
    //   }
    //       this.products = data
    //        })


    }

    onResearchSubmit(value:any){


      console.log('submitresearch', value);
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['recherche/', value.research]));


      // this.router.navigate(['recherche/', value.research])
    
    }

      
    
    logout(){
      sessionStorage.clear();
      this.router.navigate([''])
    }
}



  
