import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  file: File | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



  onFileSelected(event:any) {

        console.log(event)

        this.file = <File>event.target.files[0];
        
        let formData = new FormData();
        
        formData.append("image", this.file);

        // console.log(this.file)

        this.http.post('http://localhost:8000/admin/product/create', formData).subscribe(result => {
            
        console.log('addProduct', result);

            // const upload$ = this.http.post("/api/thumbnail-upload", formData);

            // upload$.subscribe();
        })
      
    }

  onSubmitAddP(value:any) {
    console.log('addP', value);
    
        this.http.post('http://localhost:8000/admin/product/create', value).subscribe(result => {
        console.log('addProduct', result);
    })}

}
