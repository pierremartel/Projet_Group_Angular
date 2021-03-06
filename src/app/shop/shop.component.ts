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
  priceTotalCalcul : any = [];
  priceTotal: any;

  getTotalPrice() {

    // Calcul Prix total du panier
        for (let t = 0; t < this.articles.length; t++){
          let prixArticles = this.articles[t].Product.price;
          let quantityArticles = this.articles[t].quantity;
          // console.log (quantityArticles);

          let sum = prixArticles * quantityArticles ;
          // console.log(sum);

          this.priceTotalCalcul.push(sum);

          // console.log(this.priceTotalCalcul);

          const reducer = ( accumulator: any, currentValue: any) => accumulator + currentValue
          this.priceTotal = this.priceTotalCalcul.reduce(reducer, 0);
          console.log(this.priceTotal);
        }

  }
  
  constructor(private router : Router, private http: HttpClient) {}

  ngOnInit(): void {

    let CartData = new FormData();

    CartData.append("user_id", this.$user_id);

    this.http.post('http://localhost:8000/cart', CartData).subscribe(result => {
        console.log('resultCart', result);
        // Variable qui contient les produit stockés dans le panier
        this.articles = result;
        

        // Récupération des images des produits stockés dans le panier
        // console.log('resultArticle', this.articles[2].Product.imageFileName);

        for (let i = 0; i < this.articles.length; i++){
          this.articles[i].Product.imageFileName = 'http://localhost:8000/uploads/images/products/' + this.articles[i].Product.imageFileName;
        };

        this.getTotalPrice();   
        
    })


  }

  deleteProduct(productId:any){
    let CartData = new FormData();

    CartData.append("user_id", this.$user_id);

    CartData.append("product_id", productId);

    this.http.post('http://localhost:8000/cart/delete', CartData).subscribe(result => {
        console.log('resultCart', result);
        this.ngOnInit();
        this.getTotalPrice();
    })

    

    // this.router.navigate(['panier']);

    //  this.router.navigateByUrl('panier', {skipLocationChange: true}).then(()=>
    //    this.router.navigate(['panier']));


  }

  onContinueByPayment(): void { 
    this.router.navigateByUrl('paiement');
  }

  

}
