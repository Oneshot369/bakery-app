import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes =
  [
    {path:'products', component: ListProductsComponent},
    {path:'', component: ListProductsComponent},
    {path:'add', component: AddProductComponent},
    {path:'user', component: UserComponent},
    {path:'signup', component: AddUserComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
