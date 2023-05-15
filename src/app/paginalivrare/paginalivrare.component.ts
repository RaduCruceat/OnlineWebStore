import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CosService } from '../cos.service';

@Component({
  selector: 'app-paginalivrare',
  templateUrl: './paginalivrare.component.html',
  styleUrls: ['./paginalivrare.component.css']
})
export class PaginalivrareComponent
{
  constructor(private router: Router, public cosService: CosService) { }
  butonhome() { this.router.navigateByUrl('/'); }
}
