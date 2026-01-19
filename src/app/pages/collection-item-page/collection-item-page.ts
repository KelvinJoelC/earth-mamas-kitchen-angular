import { Component, inject, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { ProductOptions } from '../../core/models/product.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import { CollectionItemForm } from '../../features/collection/collection-item-form/collection-item-form';
import { OrderApiService } from '../../core/services/order-api.service';
import { CartItem } from '../../core/models/cart.model';
import { CartService } from '../../core/services/cart.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-collection-item-page',
  imports: [ReactiveFormsModule, CollectionItemForm, MatButtonModule],
  templateUrl: './collection-item-page.html',
  styleUrl: './collection-item-page.scss',
})
export class CollectionItemPage {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly productService: ProductService = inject(ProductService);
  public readonly cartService = inject(CartService);
  private readonly router = inject(Router);

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
    const item: CartItem = {
      id: crypto.randomUUID(),
      productId: this.productId(),
      title: this.product()?.title ?? '',
      options: this.form.value,
      // totalPrice: 35
    };
    //Navegar al carrito
    console.log('Adding to cart:', item);
    this.cartService.add(item);
    this.router.navigate(['/cart']);
  }
}
