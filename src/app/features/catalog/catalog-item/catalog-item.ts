import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { MatCardModule,  } from '@angular/material/card';

@Component({
  selector: 'app-catalog-item',
  imports: [MatCardModule],
  templateUrl: './catalog-item.html',
  styleUrl: './catalog-item.scss',
})
export class CatalogItem {
  @Input() product!: Product;
}
