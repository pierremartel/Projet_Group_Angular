import { Injectable } from "@angular/core";
import { ListProducts } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})

export class ListProductsService {
    listProducts : ListProducts[] = [
          {
            imageUrl: './assets/photos/clementine.jpg',
            title: 'Clementine',
            price: 2
        },
        {
            imageUrl: './assets/photos/carotes.jpg',
            title: 'Carottes',
            price: 2
        },
        {
            imageUrl: './assets/photos/Filets_de_poitrine_de_poulet_crus.jpg',
            title: 'Poulets',
            price: 2
        },
        {
            imageUrl: './assets/photos/Saucisse_crue.jpg',
            title: 'Saucisses',
            price: 2
        }   
        ];

        getAllProducts(): ListProducts[] {
            return this.listProducts;
          }



    }
       
        
        
