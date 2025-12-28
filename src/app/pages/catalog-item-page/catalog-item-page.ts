import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule }  from '@angular/forms';
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

  readonly product$: Observable<Product | undefined> = this.route.paramMap.pipe(
    map(params => params.get('id')),
    filter((id): id is string => id !== null),
    switchMap(id => this.productService.getProduct(id))
  );
  
  form = new FormGroup({
    notes: new FormControl('')
  })

  submit(){
    const formValues =  this.form.value;
    console.log(formValues)
  }
}
