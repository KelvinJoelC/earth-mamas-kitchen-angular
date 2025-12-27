import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CatalogService } from '../../core/services/catalog.service';
import { Catalog } from '../../core/models/catalog.model';

@Component({
  selector: 'app-catalog-page',
  imports: [NgFor],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.scss',
})
export class CatalogPage {
  catalog: Catalog[];
  
  constructor(private catalogService: CatalogService) {
    this.catalog = this.catalogService.getCatalog();
  }
}
