import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogItemForm } from './catalog-item-form';

describe('CatalogItemForm', () => {
  let component: CatalogItemForm;
  let fixture: ComponentFixture<CatalogItemForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogItemForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogItemForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
