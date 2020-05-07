import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { OsCreateComponent } from './components/nsa/os/os-create/os-create.component';
import { OsCrudComponent } from './views/os-crud/os-crud.component';
import { OsDeleteComponent } from './components/nsa/os/os-delete/os-delete.component';
import { OsUpdateComponent } from './components/nsa/os/os-update/os-update.component';
import { OsFatherDeleteComponent } from './components/nsa/os-father/os-father-delete/os-father-delete.component';
import { OsFatherUpdateComponent } from './components/nsa/os-father/os-father-update/os-update.component';
import { OsFatherCreateComponent } from './components/nsa/os-father/os-father-create/os-father-create.component';
import { OsFatherCrudComponent } from './views/os-father-crud/os-father-crud.component';
import { FabioExampleComponent } from './components/nsa/fabio-example/fabio-example/fabio-example.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "oss",
    component: OsCrudComponent
  },
  {
    path: "oss/create",
    component: OsCreateComponent
  },
  {
    path: "oss/update/:id",
    component: OsUpdateComponent
  },
  {
    path: "oss/delete/:id",
    component: OsDeleteComponent
  },
  {
    path: "ossfather",
    component: OsFatherCrudComponent
  },
  {
    path: "ossfather/create",
    component: OsFatherCreateComponent
  },
  {
    path: "ossfather/update/:id",
    component: OsFatherUpdateComponent
  },
  {
    path: "ossfather/delete/:id",
    component: OsFatherDeleteComponent
  },
  {
    path: "fabio",
    component: FabioExampleComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
