import { Component, Input } from '@angular/core';
import { Catalog } from '../../../core/models/catalog.model';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-catalog-item',
  imports: [MatIconModule,RouterLink],
  templateUrl: './catalog-item.html',
  styleUrl: './catalog-item.scss',
})
export class CatalogItem {
  @Input() product!: Catalog;
}
