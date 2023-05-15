import { Component, Input } from '@angular/core';
import { CosService } from '../cos.service';
import { collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../environments/environment';
import { doc, getDocs, getDoc } from "firebase/firestore";
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

type Produs = {
  pret: number;
  numeimagine: string;
  numeprodus: string;
  cantitate: number;
};

@Component({
  selector: 'app-pagina-magazin-produse',
  templateUrl: './pagina-magazin-produse.component.html',
  styleUrls: ['./pagina-magazin-produse.component.css']
})
export class PaginaMagazinProduseComponent {
  Produse: Produs[] = [];
  @Input() pagina!: number;
  ngOnInit() { this.adudate(); }
  async adudate()
  {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    let i = 0;
    const querySnapshot = await getDocs(collection(db, "Pagina" + this.pagina));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //  console.log(doc.id, " => ", doc.data()['Pret']);
      // console.log(doc.id, " => ", doc.data()['Numeimagine']);
      this.Produse[i] = {
        pret: doc.data()['pret'],
        numeimagine: doc.data()['poza'],
        numeprodus: doc.data()['nume'],
        cantitate: doc.data()['cantitate'],
      };
      i++;
    });
  }
  constructor(private router: Router, public cosService: CosService, private snackbar: MatSnackBar) {
    for (let i = 0; i < 5; i++)
    {
      this.Produse[i] =
      {
        pret: 0,
        numeimagine: 'loading-gif.gif',
        numeprodus: 'loading...',
        cantitate: 0,
      };
    }
  };
  

  adaugaincos(i: number)
  {
    let Produstemp: Produs = {
      pret: this.Produse[i].pret,
      numeimagine: this.Produse[i].numeimagine,
      numeprodus: this.Produse[i].numeprodus,
      cantitate: this.Produse[i].cantitate,
    }
    if (this.cosService.getProduse().find(e => e.numeprodus === (this.Produse[i].numeprodus)))
    {
      this.snackbar.open('Acest produs este deja in coș','Închide', 
        {duration: 2200 }) 
    }
    else
    {
      this.cosService.setProduse(Produstemp);
      this.cosService.setprettotal(this.Produse[i].pret);
      this.cosService.adaugaobiectincos(i);
    }
  };
}

