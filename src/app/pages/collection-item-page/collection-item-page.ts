import { Component, inject, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import { CollectionItemForm } from '../../features/collection/collection-item-form/collection-item-form';
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
  private readonly router = inject(Router);

  public readonly cartService = inject(CartService);


  submit$ = new BehaviorSubject(false);

  private readonly productId = signal(
    this.route.snapshot.paramMap.get('id')!
  );

  readonly detailsFormOpen = signal(true);
  readonly product = computed(() =>
    this.productService.getProductById(this.productId())
  );

  form = new FormGroup({})

  submit() {
    if (this.form.invalid) return;

    const item: CartItem = {
      id: crypto.randomUUID(),
      productId: this.productId(),
      title: this.product()?.title ?? '',
      options: this.form.value,
      // totalPrice: 35
    };
    console.log('Adding to cart:', item);
    this.cartService.add(item);
    this.router.navigate(['/cart']);
  }

  reset() {
    this.cartService.clear();
    this.detailsFormOpen.set(false);
    this.form.reset();
  }
  
}
