import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FacturaComponent } from './components/factura/factura.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsernotfComponent } from './components/usernotf/usernotf.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'usernotfoundweb', component: UsernotfComponent
  },
  {
    path: 'homeweb', component: HomeComponent
  },
  {
    path: 'carritoweb', component: CarritoComponent
  },
  {
    path: 'facturaweb', component: FacturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
