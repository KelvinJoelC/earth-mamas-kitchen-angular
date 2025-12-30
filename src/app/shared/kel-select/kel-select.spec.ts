import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelSelect } from './kel-select';

describe('KelSelect', () => {
  let component: KelSelect;
  let fixture: ComponentFixture<KelSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
