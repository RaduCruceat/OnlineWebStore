import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatermeniComponent } from './paginatermeni.component';

describe('PaginatermeniComponent', () => {
  let component: PaginatermeniComponent;
  let fixture: ComponentFixture<PaginatermeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatermeniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatermeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
