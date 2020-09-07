import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AwardComponent } from './award/award.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BookingComponent } from './booking/booking.component';
import { CartComponent } from './cart/cart.component';
import { CustomerComponent } from './customer/customer.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};

const routes: Routes = [
  {
    path: '', component: HomeComponent
},
{
  path: 'about', component: AboutComponent
}
,
{
  path: 'award', component: AwardComponent
}
,
{
  path: 'contact', component: ContactComponent
}
,
{
  path: 'portfolio', component: PortfolioComponent

}
,
{
  path: 'booking', component: BookingComponent

}
,{
  path: 'cart', component: CartComponent
}
,{
  path: 'customer', component: CustomerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
