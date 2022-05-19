import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthentificationCustomerComponent } from './authentification-customer/authentification-customer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { ContactComponent } from './contact/contact.component';

import { FooterComponent } from './footer/footer.component';
import { LandingPageNewproductsComponent } from './landing-page-newproducts/landing-page-newproducts.component';
import { LandingPageServicesComponent } from './landing-page-services/landing-page-services.component';
import { LandingPageBestsellComponent } from './landing-page-bestsell/landing-page-bestsell.component';
import { LandingPageCommentsComponent } from './landing-page-comments/landing-page-comments.component';
import { CardNewproductsComponent } from './card-newproducts/card-newproducts.component';
import { CardBestsellComponent } from './card-bestsell/card-bestsell.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthentificationCustomerComponent,
    LandingPageComponent,
    ContactComponent,
    FooterComponent,
    LandingPageNewproductsComponent,
    LandingPageServicesComponent,
    LandingPageBestsellComponent,
    LandingPageCommentsComponent,
    CardNewproductsComponent,
    CardBestsellComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
