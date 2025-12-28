import { Injectable } from '@angular/core';
import { Catalog } from '../models/catalog.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private catalog: Catalog[] = [
    {
      id: 'bouquets',
      title: 'Bakery products',
      description: 'A different kind of bouquet: flower-shaped cupcakes, as beautiful as they are delicious. Perfect for gifting or celebrating with charm.',
      background: 'linear-gradient(135deg, white 0%, #a0cb5c 20%, #6ca771 50%, #a89bc0 80%, white 100%)',
    },
    {
      id: 'cakes',
      title: 'Experience products',
      description: 'Delicate handmade creations for your most special moments. Unique designs that blend flavor and style.',
      background: 'linear-gradient(135deg, #fcb0b3, #ffdeaa, #c1d3fe)'
    },
    {
      id: 'edible-blooms',
      title: 'Diference products',
      description: 'Blooms you can eat and enjoy. Sweet bouquets crafted with fine pastry techniques to delight all the senses.',
      background: 'linear-gradient(135deg, white 0%, #dba2b1 30%, #d88b6f 70%, white 100%)'
    },
    {
      id: 'events',
      title: 'Special occassions',
      description: 'Impress your clients and colleagues with sweet creations designed for professional events. Elegance and flavor in every detail.',
      background: 'linear-gradient(135deg, white 0%, #bfc8e6 25%, #c7d0dd 50%, #b3bfd8 75%, white 100%)'
    },
  ];

  getCatalog(): Catalog[] {
    return this.catalog;
  }
}
