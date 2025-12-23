import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { CatalogItem } from '../catalog-item/catalog-item';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-catalog-list',
  imports: [CatalogItem,NgFor],
  templateUrl: './catalog-list.html',
  styleUrl: './catalog-list.scss',
})
export class CatalogList {
  
  products: Product[]; 
  
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
