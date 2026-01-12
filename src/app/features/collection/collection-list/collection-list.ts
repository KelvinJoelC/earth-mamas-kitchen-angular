import { Component, ElementRef, ViewChild } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { CollectionItem } from '../collection-item/collection-item';
import { Collection } from '../../../core/models/collection.model';
import EmblaCarousel from 'embla-carousel';


@Component({
  selector: 'app-collection-list',
  imports: [CollectionItem],
  templateUrl: './collection-list.html',
  styleUrl: './collection-list.scss',
})
export class CollectionList {
  @ViewChild('emblaRoot', { static: true }) emblaRoot!: ElementRef;
  collection: Collection[];
  embla!: ReturnType<typeof EmblaCarousel>;

  constructor(private collectionService: CollectionService) {
    this.collection = this.collectionService.getCollection();
  }

  ngAfterViewInit() {
    this.embla = EmblaCarousel(this.emblaRoot.nativeElement, { loop: false });
  }
}
