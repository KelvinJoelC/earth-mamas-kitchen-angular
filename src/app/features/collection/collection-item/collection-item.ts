import { Component, inject, Input } from '@angular/core';
import { Collection } from '../../../core/models/collection.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductService } from '../../../core/services/product.service';


@Component({
  selector: 'app-collection-item',
  imports: [MatIconModule, RouterLink, MatProgressSpinnerModule],
  templateUrl: './collection-item.html',
  styleUrl: './collection-item.scss',
})
export class CollectionItem {
  @Input() product!: Collection;
  
  readonly productService = inject(ProductService);
}
