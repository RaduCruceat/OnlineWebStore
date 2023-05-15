import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginalivrareComponent } from './paginalivrare.component';

describe('PaginalivrareComponent', () => {
  let component: PaginalivrareComponent;
  let fixture: ComponentFixture<PaginalivrareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginalivrareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginalivrareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
