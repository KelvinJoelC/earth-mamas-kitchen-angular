import { Component } from '@angular/core';
import { CollectionService } from '../../core/services/collection.service';
import { Collection } from '../../core/models/collection.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collection-page',
  imports: [RouterLink],
  templateUrl: './collection-page.html',
  styleUrl: './collection-page.scss',
})
export class CollectionPage {
  collection: Collection[];
  
  constructor(private collectionService: CollectionService) {
    this.collection = this.collectionService.getCollection();
  }
}
