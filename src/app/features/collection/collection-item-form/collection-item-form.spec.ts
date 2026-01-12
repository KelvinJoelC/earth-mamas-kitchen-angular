import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionItemForm } from './collection-item-form';

describe('CollectionItemForm', () => {
  let component: CollectionItemForm;
  let fixture: ComponentFixture<CollectionItemForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionItemForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionItemForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
