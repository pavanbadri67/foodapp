import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'', redirectTo:'menu-page',pathMatch:'full'},
  {path:'menu-page', component: MenuPageComponent},
  {path:'order-page', component: OrderPageComponent},
  {path:'signin', component: SigninComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
