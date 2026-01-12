import { Injectable } from '@angular/core';
import { Collection } from '../models/collection.model';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private readonly collection: Collection[] = [
    {
      id: 'bouquets',
      title: 'Floral Cupcake Bouquets',
      description: 'Flowers you can eat. Edible Blooms. The perfect gift for a special occasion.',
      background: 'linear-gradient(135deg, white 0%, #a0cb5c 20%, #6ca771 50%, #a89bc0 80%, white 100%)',
    },
    {
      id: 'cakes',
      title: 'Bespoke cakes',
      description: 'Earth Mama cakes are born from nature and touched by magic. Inspired by earthy textures, blooming florals, and a sense of quiet enchantment.',
      background: 'linear-gradient(135deg, #fcb0b3, #ffdeaa, #c1d3fe)'
    },
    {
      id: 'edible-blooms',
      title: 'Edible blooms',
      description: 'Handcrafted edible blooms inspired by nature and enchantment.',
      background: 'linear-gradient(135deg, white 0%, #dba2b1 30%, #d88b6f 70%, white 100%)'
    },
    {
      id: 'events',
      title: 'Special occassions',
      description: 'Impress your clients and colleagues with sweet creations designed for professional events. Elegance and flavor in every detail.',
      background: 'linear-gradient(135deg, white 0%, #bfc8e6 25%, #c7d0dd 50%, #b3bfd8 75%, white 100%)'
    },
  ];

  getCollection(): Collection[] {
    return this.collection;
  }
}
