import { Component, inject, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { ProductOptions } from '../../core/models/product.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import { CollectionItemForm } from '../../features/collection/collection-item-form/collection-item-form';
import { OrderApiService } from '../../core/services/order-api.service';

@Component({
  selector: 'app-collection-item-page',
  imports: [ReactiveFormsModule, CollectionItemForm, MatButtonModule],
  templateUrl: './collection-item-page.html',
  styleUrl: './collection-item-page.scss',
})
export class CollectionItemPage {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly productService: ProductService = inject(ProductService);
  private readonly orderApiService: OrderApiService = inject(OrderApiService);

  submit$ = new BehaviorSubject(false);

  private readonly productId = signal(
    this.route.snapshot.paramMap.get('id')!
  );

  readonly product = computed(() =>
    this.productService.getProductById(this.productId())
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
