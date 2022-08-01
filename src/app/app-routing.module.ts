import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SelectPageComponent } from './select-page/select-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'create-ads',
    component: SelectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
