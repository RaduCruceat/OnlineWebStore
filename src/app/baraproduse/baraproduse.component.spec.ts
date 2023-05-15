import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaraproduseComponent } from './baraproduse.component';

describe('BaraproduseComponent', () => {
  let component: BaraproduseComponent;
  let fixture: ComponentFixture<BaraproduseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaraproduseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaraproduseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
