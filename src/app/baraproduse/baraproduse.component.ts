import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baraproduse',
  templateUrl: './baraproduse.component.html',
  styleUrls: ['./baraproduse.component.css']
})
export class BaraproduseComponent {

  constructor(private router: Router) { }
  butonpagina(i: number) { this.router.navigateByUrl('/pagina'+i); }

}
