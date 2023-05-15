import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from '../app/pagina1/pagina1.component'
import { Pagina2Component } from '../app/pagina2/pagina2.component'
import { Pagina3Component } from '../app/pagina3/pagina3.component'
import { Pagina4Component } from '../app/pagina4/pagina4.component'
import { Pagina5Component } from '../app/pagina5/pagina5.component'
import { Pagina6Component } from '../app/pagina6/pagina6.component'
import { PaginainfoComponent } from '../app/paginainfo/paginainfo.component'
import { PaginalivrareComponent } from '../app/paginalivrare/paginalivrare.component'
import { PaginatermeniComponent } from '../app/paginatermeni/paginatermeni.component'
import { CosComponent } from '../app/cos/cos.component'
import { HomeComponent } from '../app/home/home.component'
import { ContComponent } from '../app/cont/cont.component'
import { ContnouComponent } from '../app/contnou/contnou.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina3', component: Pagina3Component },
  { path: 'pagina4', component: Pagina4Component },
  { path: 'pagina5', component: Pagina5Component },
  { path: 'pagina6', component: Pagina6Component },
  { path: 'paginainfo', component: PaginainfoComponent },
  { path: 'paginalivrare', component: PaginalivrareComponent },
  { path: 'paginatermeni', component: PaginatermeniComponent },
  { path: 'cont', component: ContComponent },
  { path: 'contnou', component: ContnouComponent },
  { path: 'cos', component: CosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
