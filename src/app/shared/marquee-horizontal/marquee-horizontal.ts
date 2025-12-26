import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marquee-horizontal',
  imports: [],
  templateUrl: './marquee-horizontal.html',
  styleUrl: './marquee-horizontal.scss',
})
export class MarqueeHorizontal {
  @Input() word: string = 'hola';

  get repeatedWords(): string {
    return Array(10).fill(this.word).join(' ');
  }
}
