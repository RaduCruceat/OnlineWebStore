import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CosService } from '../cos.service';

@Component({
  selector: 'app-bara',
  templateUrl: './bara.component.html',
  styleUrls: ['./bara.component.css']
})
export class BaraComponent {

  constructor(private router: Router, public cosService: CosService) { }

  butoncont() {this.router.navigateByUrl('/cont');}
  butoncos() { this.router.navigateByUrl('/cos'); }
  butonhome() { this.router.navigateByUrl('/');}

}
