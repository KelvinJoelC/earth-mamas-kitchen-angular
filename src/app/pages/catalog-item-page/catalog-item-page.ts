import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { NgIf, AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule }  from '@angular/forms';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-catalog-item-page',
  imports: [NgIf,AsyncPipe,ReactiveFormsModule],
  templateUrl: './catalog-item-page.html',
  styleUrl: './catalog-item-page.scss',
})
export class CatalogItemPage { 
  private readonly route:ActivatedRoute = inject(ActivatedRoute);
  private readonly productService: ProductService = inject(ProductService);

  readonly product$: Observable<Product | undefined> = this.route.paramMap.pipe(
    map(params => params.get('id')),
    filter((id): id is string => id !== null),
    map(id => this.productService.getProduct(id))
  );
  
  form = new FormGroup({
    notes: new FormControl('')
  })

  submit(){
    const notes =  this.form.value.notes ?? '';
    console.log(notes)
  }
}
