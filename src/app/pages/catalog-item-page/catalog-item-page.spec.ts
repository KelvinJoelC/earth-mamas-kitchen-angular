import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogItemPage } from './catalog-item-page';

describe('CatalogItemPage', () => {
  let component: CatalogItemPage;
  let fixture: ComponentFixture<CatalogItemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogItemPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogItemPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
