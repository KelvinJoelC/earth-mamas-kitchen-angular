import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelTextarea } from './kel-textarea';

describe('KelTextarea', () => {
  let component: KelTextarea;
  let fixture: ComponentFixture<KelTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelTextarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelTextarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
