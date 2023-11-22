import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';

import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:ProductListComponent ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
