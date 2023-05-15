import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginainfoComponent } from './paginainfo.component';

describe('PaginainfoComponent', () => {
  let component: PaginainfoComponent;
  let fixture: ComponentFixture<PaginainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginainfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
