import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { ContComponent } from './cont/cont.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { Pagina4Component } from './pagina4/pagina4.component';
import { BaraComponent } from './bara/bara.component';
import { Pagina5Component } from './pagina5/pagina5.component';
import { Pagina6Component } from './pagina6/pagina6.component';
import { BaraproduseComponent } from './baraproduse/baraproduse.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CosComponent } from './cos/cos.component';
import { PaginaMagazinProduseComponent } from './pagina-magazin-produse/pagina-magazin-produse.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BaraInformatiiComponent } from './bara-informatii/bara-informatii.component';
import { PaginalivrareComponent } from './paginalivrare/paginalivrare.component';
import { PaginainfoComponent } from './paginainfo/paginainfo.component';
import { PaginatermeniComponent } from './paginatermeni/paginatermeni.component';
import { ContnouComponent } from './contnou/contnou.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina2Component,
    ContComponent,
    Pagina1Component,
    Pagina3Component,
    Pagina4Component,
    BaraComponent,
    Pagina5Component,
    Pagina6Component,
    BaraproduseComponent,
    CosComponent,
    PaginaMagazinProduseComponent,
    BaraInformatiiComponent,
    PaginalivrareComponent,
    PaginainfoComponent,
    PaginatermeniComponent,
    ContnouComponent,
    BottomsheetComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    MatBottomSheetModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatExpansionModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
