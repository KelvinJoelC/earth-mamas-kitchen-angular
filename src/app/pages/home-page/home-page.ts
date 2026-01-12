import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

import { CollectionList } from '../../features/collection/collection-list/collection-list';
import { MarqueeHorizontal } from '../../shared/marquee-horizontal/marquee-horizontal';

@Component({
  selector: 'app-home',
  imports: [CollectionList,MarqueeHorizontal,RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
    marqueeWord: string = 'Delights •'
 }
