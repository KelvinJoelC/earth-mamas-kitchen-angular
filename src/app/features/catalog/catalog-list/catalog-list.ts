import { Component, ElementRef, ViewChild } from '@angular/core';
import { CatalogService } from '../../../core/services/catalog.service';
import { CatalogItem } from '../catalog-item/catalog-item';
import { Catalog } from '../../../core/models/catalog.model';
import EmblaCarousel from 'embla-carousel';


@Component({
  selector: 'app-catalog-list',
  imports: [CatalogItem],
  templateUrl: './catalog-list.html',
  styleUrl: './catalog-list.scss',
})
export class CatalogList {
  @ViewChild('emblaRoot', { static: true }) emblaRoot!: ElementRef;
  catalog: Catalog[];
  embla!: ReturnType<typeof EmblaCarousel>;

  constructor(private catalogService: CatalogService) {
    this.catalog = this.catalogService.getCatalog();
  }

  ngAfterViewInit() {
    this.embla = EmblaCarousel(this.emblaRoot.nativeElement, { loop: false });
  }
}
