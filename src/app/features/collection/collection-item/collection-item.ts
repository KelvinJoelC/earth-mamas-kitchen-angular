import { Component, Input } from '@angular/core';
import { Collection } from '../../../core/models/collection.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collection-item',
  imports: [MatIconModule, RouterLink],
  templateUrl: './collection-item.html',
  styleUrl: './collection-item.scss',
})
export class CollectionItem {
  @Input() product!: Collection;
}
