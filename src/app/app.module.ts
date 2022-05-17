import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthentificationCustomerComponent } from './authentification-customer/authentification-customer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageNewproductsComponent } from './landing-page-newproducts/landing-page-newproducts.component';
import { LandingPageServicesComponent } from './landing-page-services/landing-page-services.component';
import { LandingPageBestsellComponent } from './landing-page-bestsell/landing-page-bestsell.component';
import { LandingPageCommentsComponent } from './landing-page-comments/landing-page-comments.component';
import { CardNewproductsComponent } from './card-newproducts/card-newproducts.component';
import { CardBestsellComponent } from './card-bestsell/card-bestsell.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthentificationCustomerComponent,
    LandingPageComponent,
    FooterComponent,
    LandingPageNewproductsComponent,
    LandingPageServicesComponent,
    LandingPageBestsellComponent,
    LandingPageCommentsComponent,
    CardNewproductsComponent,
    CardBestsellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
