import { Component, computed, inject } from '@angular/core';
import { CollectionService } from '../../core/services/collection.service';
import { Collection } from '../../core/models/collection.model';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-collection-page',
  imports: [RouterLink,MatProgressSpinnerModule],
  templateUrl: './collection-page.html',
  styleUrl: './collection-page.scss',
})
export class CollectionPage {
  
  readonly productService = inject(ProductService);
  private readonly collectionService = inject(CollectionService);
  
  readonly collection = computed(() =>
    this.collectionService.getCollection()
  );
}
