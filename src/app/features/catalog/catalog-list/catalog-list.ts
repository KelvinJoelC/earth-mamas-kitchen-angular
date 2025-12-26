import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { CatalogItem } from '../catalog-item/catalog-item';
import { Product } from '../../../core/models/product.model';
import EmblaCarousel from 'embla-carousel';


@Component({
  selector: 'app-catalog-list',
  imports: [CatalogItem,NgFor],
  templateUrl: './catalog-list.html',
  styleUrl: './catalog-list.scss',
})
export class CatalogList {
  @ViewChild('emblaRoot', { static: true }) emblaRoot!: ElementRef;
  products: Product[];
  embla!: ReturnType<typeof EmblaCarousel>;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
  
  ngAfterViewInit() {
    this.embla = EmblaCarousel(this.emblaRoot.nativeElement, { loop: false });
  }
}
