import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthentificationCustomerComponent } from './authentification-customer/authentification-customer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNouveautesComponent } from './page-nouveautes/page-nouveautes.component';

import { ContactComponent } from './contact/contact.component';

import { FooterComponent } from './footer/footer.component';
import { LandingPageNewproductsComponent } from './landing-page-newproducts/landing-page-newproducts.component';
import { LandingPageServicesComponent } from './landing-page-services/landing-page-services.component';
import { LandingPageCommentsComponent } from './landing-page-comments/landing-page-comments.component';
import { CardNewproductsComponent } from './card-newproducts/card-newproducts.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { PageProductsComponent } from './page-products/page-products.component';
import { NavPageProductsComponent } from './nav-page-products/nav-page-products.component';
import { SinglePageProductsComponent } from './single-page-products/single-page-products.component';
import { ShopComponent } from './shop/shop.component';
import { PaymentComponent } from './payment/payment.component';
import { AcknowledgementPageComponent } from './acknowledgement-page/acknowledgement-page.component';
import { CgvComponent } from './cgv/cgv.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ListPageProductsComponent } from './list-page-products/list-page-products.component';

import { StripeComponent } from './stripe/stripe.component';
// import {loadStripe} from '@stripe/stripe-js';


import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthentificationCustomerComponent,
    LandingPageComponent,
    PageNouveautesComponent,
    ContactComponent,
    FooterComponent,
    LandingPageNewproductsComponent,
    LandingPageServicesComponent,
    LandingPageCommentsComponent,
    CardNewproductsComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    PageProductsComponent,
    NavPageProductsComponent,
    SinglePageProductsComponent,
    ShopComponent,
    PaymentComponent,
    AcknowledgementPageComponent,
    CgvComponent,
    LegalNoticeComponent,
    ListPageProductsComponent,
    StripeComponent,
    SearchComponent,



  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
