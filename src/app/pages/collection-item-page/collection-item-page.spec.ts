import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionItemPage } from './collection-item-page';

describe('CollectionItemPage', () => {
  let component: CollectionItemPage;
  let fixture: ComponentFixture<CollectionItemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionItemPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionItemPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
