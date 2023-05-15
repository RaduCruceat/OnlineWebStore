import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaraComponent } from './bara.component';

describe('BaraComponent', () => {
  let component: BaraComponent;
  let fixture: ComponentFixture<BaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
