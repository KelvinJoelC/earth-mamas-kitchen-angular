import { Component, inject, Input, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { AsyncPipe, NgIf, KeyValuePipe, NgFor  } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-catalog-item-form',
  imports: [NgIf, NgFor, AsyncPipe,ReactiveFormsModule, KeyValuePipe],
  templateUrl: './catalog-item-form.html',
  styleUrl: './catalog-item-form.scss',
})
export class CatalogItemForm { 
  @Input() form!: FormGroup;
  @Input() id!: string;
  private readonly productService = inject(ProductService);
  fields$: Observable<Product | undefined> = of(undefined);

  ngOnInit() {
    if (this.id) {
      this.fields$ = this.productService.getProduct(this.id);
    }
  }
} 
