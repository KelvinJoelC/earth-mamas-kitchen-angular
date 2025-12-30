import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelCheckbox } from './kel-checkbox';

describe('KelCheckbox', () => {
  let component: KelCheckbox;
  let fixture: ComponentFixture<KelCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelCheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
