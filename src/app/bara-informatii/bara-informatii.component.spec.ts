import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaraInformatiiComponent } from './bara-informatii.component';

describe('BaraInformatiiComponent', () => {
  let component: BaraInformatiiComponent;
  let fixture: ComponentFixture<BaraInformatiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaraInformatiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaraInformatiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
