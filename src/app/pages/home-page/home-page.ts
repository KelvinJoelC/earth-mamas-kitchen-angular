import { Component } from '@angular/core';
import { CatalogList } from '../../features/catalog/catalog-list/catalog-list';
import { MarqueeHorizontal } from '../../shared/marquee-horizontal/marquee-horizontal';

@Component({
  selector: 'app-home',
  imports: [CatalogList,MarqueeHorizontal],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
    marqueeWord: string = 'Delights •'
 }
