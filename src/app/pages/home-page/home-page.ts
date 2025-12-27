import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

import { CatalogList } from '../../features/catalog/catalog-list/catalog-list';
import { MarqueeHorizontal } from '../../shared/marquee-horizontal/marquee-horizontal';

@Component({
  selector: 'app-home',
  imports: [CatalogList,MarqueeHorizontal,RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
    marqueeWord: string = 'Delights •'
 }
