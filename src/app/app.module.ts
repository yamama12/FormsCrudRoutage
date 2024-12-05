import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ajout de ReactiveFormsModule
import { AppComponent } from './app.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component'; 
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent,  
    UpdateProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule,  // Ajouté ici
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
