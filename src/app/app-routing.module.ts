import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationCustomerComponent } from './authentification-customer/authentification-customer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ContactComponent } from './contact/contact.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { PageProductsComponent } from './page-products/page-products.component';
import { ListPageProductsComponent } from './list-page-products/list-page-products.component';

const routes: Routes = [
    { path : '', component: LandingPageComponent },
    { path: 'authenticate', component: AuthentificationCustomerComponent },
    { path : 'contact', component :ContactComponent},
    { path : 'produits/ajouter', component :AddProductComponent},
    { path : 'produits/modifier', component :UpdateProductComponent},
    { path : 'produits/supprimer', component :DeleteProductComponent},
    { path : 'produits', component :PageProductsComponent},
    { path : 'promotion', component:PromotionComponent},
    { path : 'list', component:ListPageProductsComponent},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}