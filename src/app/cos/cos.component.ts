import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CosService } from '../cos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';
import { ServiciuConturiService } from '../serviciu-conturi';

type Produs = {
  pret: number;
  numeimagine: string;
  numeprodus: string;
  cantitate: number;
};

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css']
})

export class CosComponent {
  sumtotal: string = '0.00';
  prettransport: string = '25.00';
  prettransportsiproduse: string = '0.00';
 
  Produse: Array<Produs> = [];
  constructor(public ServiciuConturiService: ServiciuConturiService, private router: Router, public cosService: CosService, private snackbar: MatSnackBar, private _bottomSheet: MatBottomSheet)
  {
    this.Produse = (this.cosService.getProduse())
    this.sumtotal = (Math.round(this.cosService.getprettotal() * 100) / 100).toFixed(2);
    this.prettransport = (Math.round(this.cosService.gettransport() * 100) / 100).toFixed(2);
    this.prettransportsiproduse = (Math.round(this.cosService.gettotal() * 100) / 100).toFixed(2);
  }
  ngOnInit()
  {
    this.ServiciuConturiService.ConecteazaCont();
  }
  butonhome() { this.router.navigateByUrl('/'); }
  sterge(i: number)
  {
    this.cosService.scadeprettotal(this.cosService.Produse[i].pret);
    this.cosService.stergeobiectincos(i);
    this.snackbar.open('Acest produs a fost șters din coș', 'Închide', { duration: 2200 });
  };
  pluscantitate(i: number)
  {
    this.cosService.adaugacantitate(i)
    this.sumtotal = (Math.round(this.cosService.getprettotal() * 100) / 100).toFixed(2);
    this.prettransport = (Math.round(this.cosService.gettransport() * 100) / 100).toFixed(2);
    this.prettransportsiproduse = (Math.round(this.cosService.gettotal() * 100) / 100).toFixed(2);
  }
  minuscantitate(i: number)
  {
    if (this.cosService.scadecantitate(i) === 1)
    {
      this.sterge(i);
    }
    this.sumtotal = (Math.round(this.cosService.getprettotal() * 100) / 100).toFixed(2);
    this.prettransport = (Math.round(this.cosService.gettransport() * 100) / 100).toFixed(2);
    this.prettransportsiproduse = (Math.round(this.cosService.gettotal() * 100) / 100).toFixed(2);
  }
  openBottomSheet(): void
  {
    this._bottomSheet.open(BottomsheetComponent);
  }
}


  


