import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CosService } from '../cos.service';

@Component({
  selector: 'app-paginainfo',
  templateUrl: './paginainfo.component.html',
  styleUrls: ['./paginainfo.component.css']
})
export class PaginainfoComponent {
  constructor(private router: Router, public cosService: CosService) { }
  butonhome() { this.router.navigateByUrl('/'); }
}
