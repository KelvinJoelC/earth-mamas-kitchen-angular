import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeHorizontal } from './marquee-horizontal';

describe('MarqueeHorizontal', () => {
  let component: MarqueeHorizontal;
  let fixture: ComponentFixture<MarqueeHorizontal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueeHorizontal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueeHorizontal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
