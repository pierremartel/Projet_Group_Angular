import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationCustomerComponent } from './authentification-customer/authentification-customer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PromottionComponent } from './promottion/promottion.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
    { path : '', component: LandingPageComponent },
    { path: 'authenticate', component: AuthentificationCustomerComponent },
    {path : 'contact', component :ContactComponent},
    {path : 'promotion', component:PromottionComponent},

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