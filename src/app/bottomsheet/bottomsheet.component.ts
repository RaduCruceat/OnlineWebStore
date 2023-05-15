import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiciuConturiService } from '../serviciu-conturi';
import { CosService } from '../cos.service';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '../../environments/environment';
import { doc, setDoc } from "firebase/firestore";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

type Produs = {
  pret: number;
  numeimagine: string;
  numeprodus: string;
  cantitate: number;
};


@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent
{
  sumtotal: string = '0.00';
  prettransport: string = '25.00';
  prettransportsiproduse: string = '0.00';
  Produse: Array<Produs> = [];
  plata: string = '';
  livrare: string = '';
  numeprodus: string = '';
  cantitate: number = 0;
  pret: number = 0;
  comanda: number = 0;
  Produs: Array<Produs> = [];
  data = new Date();
  separator: string = 'GMT';

  async getRandomInt() {
    const array = new Uint32Array(1);
    self.crypto.getRandomValues(array)

    for (const num of array)
    {
      this.comanda = num;
    }
  }
  
  async setDoc() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    this.getRandomInt();
    const separatorIndex = String(this.data).indexOf(this.separator);
    await setDoc(doc(db, "Comenzi", "" + this.comanda),
      {
        email: "" + this.ServiciuConturiService.GetEmail(),
        adresa: ""+ this.livrare,
        plata: "" + this.plata,
        Produs: this.Produse,
        Total: "" + this.prettransportsiproduse,
        Data: String(this.data).substring(0, separatorIndex),
      });
    this.cosService.golestelista();
    this._bottomSheetRef.dismiss();
    this.snackbar.open('Comanda dvs. a fost plasată', 'Închide', { duration: 2200 });
  }

  constructor(public cosService: CosService, public ServiciuConturiService: ServiciuConturiService, private _bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>, private _formBuilder: FormBuilder, private snackbar: MatSnackBar) {
    this.Produse = (this.cosService.getProduse());
    this.sumtotal = (Math.round(this.cosService.getprettotal() * 100) / 100).toFixed(2);
    this.prettransport = (Math.round(this.cosService.gettransport() * 100) / 100).toFixed(2);
    this.prettransportsiproduse = (Math.round(this.cosService.gettotal() * 100) / 100).toFixed(2);
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
 
  
}
