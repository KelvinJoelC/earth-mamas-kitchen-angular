import { Component } from '@angular/core';
import { CatalogList } from '../../features/catalog/catalog-list/catalog-list';

@Component({
  selector: 'app-home',
  imports: [CatalogList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage { }
