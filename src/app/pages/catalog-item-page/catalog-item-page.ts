import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { CommonModule, NgIf } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-catalog-item-page',
  imports: [NgIf, CommonModule ],
  templateUrl: './catalog-item-page.html',
  styleUrl: './catalog-item-page.scss',
})
export class CatalogItemPage { 
  private readonly route:ActivatedRoute = inject(ActivatedRoute);
  private readonly productService: ProductService = inject(ProductService);

  readonly product$ = this.route.paramMap.pipe(
    map(params => params.get('id')),
    filter((id): id is string => id !== null),
    map(id => this.productService.getProduct(id))
  );
}
