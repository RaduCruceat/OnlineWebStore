import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CosService } from '../cos.service';

@Component({
  selector: 'app-bara-informatii',
  templateUrl: './bara-informatii.component.html',
  styleUrls: ['./bara-informatii.component.css']
})
export class BaraInformatiiComponent {
  constructor(private router: Router, public cosService: CosService) { }
  butonpaginainfo() { this.router.navigateByUrl('/paginainfo'); }
  butonanpc() { open('https://www.anpc.ro') }
  butonlivrare() { this.router.navigateByUrl('/paginalivrare') }
  butontermeni() { this.router.navigateByUrl('/paginatermeni') }
}





