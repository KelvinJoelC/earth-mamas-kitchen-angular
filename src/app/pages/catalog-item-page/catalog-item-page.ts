import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product, ProductOptions } from '../../core/models/product.model';
import { AsyncPipe } from '@angular/common';
import { FormGroup, ReactiveFormsModule }  from '@angular/forms';
import { filter, map, Observable, switchMap } from 'rxjs';
import { CatalogItemForm } from '../../features/catalog/catalog-item-form/catalog-item-form';

@Component({
  selector: 'app-catalog-item-page',
  imports: [AsyncPipe,ReactiveFormsModule,CatalogItemForm],
  templateUrl: './catalog-item-page.html',
  styleUrl: './catalog-item-page.scss',
})
export class CatalogItemPage { 
  private readonly route:ActivatedRoute = inject(ActivatedRoute);
  private readonly productService: ProductService = inject(ProductService);

  productId!: string;

  readonly product$: Observable<Product | undefined> = this.route.paramMap.pipe(
    map(params => params.get('id')),
    filter((id): id is string => id !== null),
    switchMap(id => {
      this.productId = id;
      return this.productService.getProduct(id)
    })
  );
  
  form = new FormGroup({})

  submit(){
    const formValues:ProductOptions =  this.form.value;    
    console.log(this.form)
    // const item: CartItem = {
    //   id: Date.now().toString(),
    //   title: this.productId,
    //   options: formValues
    // };
    // console.log(item)

    // alert('Item added to cart!');
    // this.cartService.addToCart(item);

    // document.getElementById('preOrderDetail')?.removeAttribute('open');
  }
}
