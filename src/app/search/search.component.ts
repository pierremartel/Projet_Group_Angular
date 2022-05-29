import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  
  productId!: number;
  research:any;
  title! : any;
  products : any = [];

  
  constructor(private http: HttpClient,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
    this.research = params.get('research');
    })

    console.log('blabla',this.research)

    
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');

      // console.log(id);
    });


    this.http.get('http://localhost:8000/research/' + this.research).subscribe(data => {

        // On stocke le résultat de la recherche dans une variable
        this.products = data;
        // console.log('okok', this.products.length);
        // On boucle sur ce résultat
        for (let i = 0; i < this.products.length; i++){
          this.products[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + this.products[i].imageFileName;
         }
        // console.log(this.products);
         
         
    })
  }
}