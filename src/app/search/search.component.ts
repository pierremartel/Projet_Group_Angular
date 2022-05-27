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
  articles : any = [];

  
  constructor(private http: HttpClient,
              private route: ActivatedRoute,) { }

  products = [];

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
    this.research = params.get('research');
    })

    console.log(this.research)

    
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');

      // console.log(id);
    });


    this.http.get('http://localhost:8000/research/' + this.research).subscribe(result => {
        // console.log('dataResearch', result);

        // On stocke le résultat de la recherche dans une variable
        this.articles = result ;
        console.log('okok', this.articles[2]);
        // On boucle sur ce résultat
        for (let i = 0; i < this.articles.length; i++){
          this.articles[i].imageFileName = 'http://localhost:8000/uploads/images/products/' + this.articles[i].imageFileName
         }
        //  console.log(this.articles);
         
         
    })
  }
}