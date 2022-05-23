import { Injectable } from "@angular/core";
import { ListProducts } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})

export class ListProductsService {
    listProducts : ListProducts[] = [
          {
            id: 1,
            imageFileName: './assets/photos/produit_1.jpg',
            title: 'Carrottes',
            description: 'lorem10loremlorlemlorlemlorlemlormeloremlor',
            price: 2,
            region: 'Haut-de-france'
        },
        {
            id: 2,
            imageFileName: './assets/photos/produit_2.jpg',
            title: 'Clementine',
            description: 'lorem10loremlorlemlorlemlorlemlormeloremlor',
            price: 2,
            region: 'Haut-de-france'
        },
        {
            id: 3,
            imageFileName: './assets/photos/produit_3.jpg',
            title: 'Poulets',
            description: 'lorem10loremlorlemlorlemlorlemlormeloremlor',
            price: 2,
            region: 'Haut-de-france'
        },
        {
            id: 4,
            imageFileName: './assets/photos/produit_4.jpg',
            title: 'Saucisses',
            description: 'lorem10loremlorlemlorlemlorlemlormeloremlor',
            price: 2,
            region: 'Haut-de-france'
        }  , 
 
        {
            id: 5,
            imageFileName: './assets/photos/produit_5.jpg',
            title: 'Pâtes',
            description: 'lorem10loremlorlemlorlemlorlemlormeloremlor',
            price: 2,
            region: 'Haut-de-france'
        } ,  
        {
            id: 6,
            imageFileName: './assets/photos/produit_6.jpg',
            title: 'Cornichons',
            description: 'lorem10loremlorlemlorlemlorlemlormeloremlor',
            price: 2,
            region: 'Haut-de-france'
        }   
        ];

        getAllProducts(): ListProducts[] {
            return this.listProducts;
          }



    }
       
        
        
