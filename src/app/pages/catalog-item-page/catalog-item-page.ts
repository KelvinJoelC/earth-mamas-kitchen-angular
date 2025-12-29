import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product, ProductOptions } from '../../core/models/product.model';
import { AsyncPipe } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject, filter, map, Observable, switchMap } from 'rxjs';
import { CatalogItemForm } from '../../features/catalog/catalog-item-form/catalog-item-form';
import { OrderApiService } from '../../core/services/order-api.service';

@Component({
  selector: 'app-catalog-item-page',
  imports: [AsyncPipe, ReactiveFormsModule, CatalogItemForm, MatButtonModule],
  templateUrl: './catalog-item-page.html',
  styleUrl: './catalog-item-page.scss',
})
export class CatalogItemPage {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly productService: ProductService = inject(ProductService);
  private readonly orderApiService: OrderApiService = inject(OrderApiService);

  submit$ = new BehaviorSubject(false);

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

  async submit() {
    if (this.form.invalid) return;
    const formValues: ProductOptions = this.form.value;
    const item: any = {
      id: Date.now().toString(),
      title: this.productId,
      options: formValues
    };

    this.submit$ = await this.orderApiService.addItem(item);
  }
}
