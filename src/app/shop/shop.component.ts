import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  $user_id: any = sessionStorage.getItem('id');

  articles : any = [];
  constructor(private router : Router, private http: HttpClient) {}

  ngOnInit(): void {

    let CartData = new FormData();

    CartData.append("user_id", this.$user_id);

    this.http.post('http://localhost:8000/cart', CartData).subscribe(result => {
        console.log('resultCart', result);

        this.articles = result 

        // for (let i = 0; i < articles.length; i++){
        //   result[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + result[i].imageFileName
        //  }

        
    })


  }

  onContinueByPayment(): void { 
    this.router.navigateByUrl('paiement');
  }

}
