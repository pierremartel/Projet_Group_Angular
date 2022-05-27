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
        console.log('dataResearch', result);
    })
  }
}