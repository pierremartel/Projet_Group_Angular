import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-single-page-products',
  templateUrl: './single-page-products.component.html',
  styleUrls: ['./single-page-products.component.css']
})
export class SinglePageProductsComponent implements OnInit {

productById = [];
id! : any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      // console.log(id);
    });
      
   
     console.log(this.id);
      this.http.get<any>('http://localhost:8000/product/' + this.id).subscribe(data => {
        console.log(data)
  
        for (let i = 0; i < data.length; i++){
         data[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + data[i].imageFileName
        }
            // console.log(data);
            this.productById = data[0]
            console.log(this.productById)
             })
  
    

  }

  onBackTo(): void {
    this.router.navigateByUrl('produits')
    
  }

  

  // getProductsById(id: number){

  // }

   

}
