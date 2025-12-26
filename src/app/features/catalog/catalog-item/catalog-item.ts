import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-catalog-item',
  imports: [MatIconModule],
  templateUrl: './catalog-item.html',
  styleUrl: './catalog-item.scss',
})
export class CatalogItem {
  @Input() product!: Product;
}
