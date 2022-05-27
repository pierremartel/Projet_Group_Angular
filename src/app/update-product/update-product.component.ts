import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id : any;

  file!: File;

  productEdit : any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.http.get<any>('http://localhost:8000/product/' + this.id).subscribe(data => {
        
        data[0].imageFileName = 'http://localhost:8000/uploads/images/products/' + data[0].imageFileName;
        this.productEdit = data[0]

        console.log(this.productEdit)
        
            
             })
  })

}

onFileSelected(event:any) {

        console.log(event)

        this.file = <File>event.target.files[0];

        console.log(this.file.name)
      
    }

onSubmitEditP(value:any){
    console.log('addP', value.title);

    let formData = new FormData();

    formData.append("image", this.file, this.file.name);

    formData.append("id", value.id);

    formData.append("title", value.title);

    formData.append("category", value.category);

    formData.append("price", value.price);

    formData.append("content", value.content);

    console.log('formdata', formData);
    
        this.http.post('http://localhost:8000/admin/product/edit', formData).subscribe(result => {
        console.log('EditProduct', result );
    })
  }

}

