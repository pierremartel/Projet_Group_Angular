import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationCustomerComponent } from './authentification-customer/authentification-customer.component';
import { ShopComponent } from './shop/shop.component';
import { PaymentComponent } from './payment/payment.component';
import { AcknowledgementPageComponent } from './acknowledgement-page/acknowledgement-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ContactComponent } from './contact/contact.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { PageProductsComponent } from './page-products/page-products.component';
import { SinglePageProductsComponent } from './single-page-products/single-page-products.component';
import { SearchComponent } from './search/search.component';

import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { CgvComponent } from './cgv/cgv.component';

const routes: Routes = [
    { path : '', component: LandingPageComponent },
    { path: 'authenticate', component: AuthentificationCustomerComponent },
    { path: 'panier', component: ShopComponent },
    { path: 'paiement', component: PaymentComponent },
    { path: 'purchase', component: AcknowledgementPageComponent },
    { path : 'contact', component :ContactComponent},
    { path : 'produits/ajouter', component :AddProductComponent},
    { path : 'modifier/:id', component :UpdateProductComponent},
    { path : 'produits/supprimer', component :DeleteProductComponent},
    { path : 'produits', component :PageProductsComponent},
    { path : 'promotion', component:PromotionComponent},
    { path : 'produits/:id', component:SinglePageProductsComponent},
    { path : 'recherche', component:SearchComponent},


    { path : 'mention-legales', component:LegalNoticeComponent},
    { path : 'conditions-generales-de-vente', component:CgvComponent},

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