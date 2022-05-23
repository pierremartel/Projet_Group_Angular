import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // file: File | null = null;
  file!: File;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



  onFileSelected(event:any) {

        console.log(event)

        this.file = <File>event.target.files[0];

        console.log(this.file.name)
        
        // let formData = new FormData();
        
        // formData.append("image", this.file);

        // console.log(this.file)

        // this.http.post('http://localhost:8000/admin/product/create', formData).subscribe(result => {
            
        // console.log('addProduct', result);

            // const upload$ = this.http.post("/api/thumbnail-upload", formData);

            // upload$.subscribe();
        // })
      
    }

  onSubmitAddP(value:any) {
    console.log('addP', value.title);

    let formData = new FormData();

    formData.append("image", this.file, this.file.name);

    // formData.append("imageName", this.file.name);

    formData.append("title", value.title);

    formData.append("category", value.category);

    formData.append("price", value.price);

    formData.append("content", value.content);

    console.log('formdata', formData);
    
        this.http.post('http://localhost:8000/admin/product/create', formData).subscribe(result => {
        console.log('addProduct', result);
    })}

}
