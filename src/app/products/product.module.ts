import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { StarModule } from './../shared/star.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent }
    ]),
    StarModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [ProductService, ProductGuardService]
})

export class ProductModule { }
