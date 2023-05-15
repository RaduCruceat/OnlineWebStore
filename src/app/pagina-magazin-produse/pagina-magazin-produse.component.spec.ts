import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMagazinProduseComponent } from './pagina-magazin-produse.component';

describe('PaginaMagazinProduseComponent', () => {
  let component: PaginaMagazinProduseComponent;
  let fixture: ComponentFixture<PaginaMagazinProduseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMagazinProduseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMagazinProduseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
