import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContnouComponent } from './contnou.component';

describe('ContnouComponent', () => {
  let component: ContnouComponent;
  let fixture: ComponentFixture<ContnouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContnouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContnouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
