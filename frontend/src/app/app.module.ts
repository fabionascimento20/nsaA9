import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RedDirective } from './directives/red.directive';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { ForDirective } from './directives/for.directive';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { OsCreateComponent } from './components/nsa/os/os-create/os-create.component';
import { OsDeleteComponent } from './components/nsa/os/os-delete/os-delete.component';
import { OsUpdateComponent } from './components/nsa/os/os-update/os-update.component';
import { OsCrudComponent } from './views/os-crud/os-crud.component';
import { OsReadComponent } from './components/nsa/os/os-read/os-read.component';

import { OsFatherCreateComponent } from './components/nsa/os-father/os-father-create/os-father-create.component';
import { OsFatherDeleteComponent } from './components/nsa/os-father/os-father-delete/os-father-delete.component';
import { OsFatherUpdateComponent } from './components/nsa/os-father/os-father-update/os-update.component';
import { OsFatherCrudComponent } from './views/os-father-crud/os-father-crud.component';
import { OsFatherReadComponent } from './components/nsa/os-father/os-father-read/os-father-read.component';
import { OsListComponent } from './components/nsa/tools/os/os-list.component';
import { FabioExampleComponent } from './components/nsa/fabio-example/fabio-example/fabio-example.component';
import { FabioExampleService } from './components/nsa/fabio-example/fabio-example/services/fabio-example.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    RedDirective,
    ForDirective,
    ProductUpdateComponent,
    ProductDeleteComponent,
    OsCreateComponent,
    OsDeleteComponent,
    OsUpdateComponent,
    OsCrudComponent,
    OsReadComponent,
    OsFatherCreateComponent ,
    OsFatherDeleteComponent,
    OsFatherUpdateComponent,
    OsFatherCrudComponent,
    OsFatherReadComponent,
    OsListComponent,
    FabioExampleComponent,
    FabioExampleService
	
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableDataSource
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
