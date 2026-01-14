import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';


@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatBadgeModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public readonly cartService = inject(CartService);

}
