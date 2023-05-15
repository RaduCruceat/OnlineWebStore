import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CosService } from '../cos.service';

@Component({
  selector: 'app-paginatermeni',
  templateUrl: './paginatermeni.component.html',
  styleUrls: ['./paginatermeni.component.css']
})
export class PaginatermeniComponent
{
  constructor(private router: Router, public cosService: CosService) { }
  butonhome() { this.router.navigateByUrl('/'); }
}
