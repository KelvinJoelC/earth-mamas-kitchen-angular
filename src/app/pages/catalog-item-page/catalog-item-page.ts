import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-catalog-item-page',
  imports: [NgIf],
  templateUrl: './catalog-item-page.html',
  styleUrl: './catalog-item-page.scss',
})
export class CatalogItemPage { 
  product?: Product;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {
  }
  ngOnInit(): void {
    //Same SPA
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.product = this.productService.getProduct(id);
      }
    });
  }
  submit(){
    console.log('SUBMITING')
  }
}
