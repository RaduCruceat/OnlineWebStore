import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../environments/environment';
import {  getDocs } from "firebase/firestore";
import { ServiciuConturiService } from '../serviciu-conturi';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { CosService } from '../cos.service';

/** @title Form field with prefix & suffix */
type Comanda = {
  Total: string ;
  Adresa: string;
  Plata: string;
  Data: Date;
  
};
type Produs=
  {
    pret: number;
    numeimagine: string;
    numeprodus: string;
    cantitate: number;
}
@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})



export class ContComponent {
  Comenzi: Comanda[] = [];
  Coduri: Array<string> = [];
  ProduseDinComenzi: Array<Produs>[] = [];
  email: string = '';
  parola: string = '';
  hide = true;
  panelOpenState = false;
  

  constructor(public cosService:CosService,private router: Router, public ServiciuConturiService: ServiciuConturiService, private snackbar: MatSnackBar) {
    
    for (let i = 0; i < 100; i++)
    {
      this.ProduseDinComenzi[i] = [];
    }
  }

  butonhome() { this.router.navigateByUrl('/'); }
  butoncontnou() { this.router.navigateByUrl('/contnou'); }
  stergeInfo() { this.email = ''; this.parola='' }

  ngOnInit()
  {
    this.ServiciuConturiService.resetNumarComenzi();
    this.adudate(); 
    this.ServiciuConturiService.ConecteazaCont();
  }

  ConecteazaCont() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, this.email, this.parola)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.ServiciuConturiService.ContulEsteConectat();
        this.ServiciuConturiService.SetEmail(this.email);
        
        const valueParola = this.parola;
        const valueEmail = this.email;
        localStorage.setItem('app.email', valueEmail);
        localStorage.setItem('app.parola', valueParola);
        this.adudate();
        this.cosService.golestelista();
        // ...
      })
      .catch((error) =>
      {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.ServiciuConturiService.ContulNuEsteConectat;        
        this.snackbar.open('Email-ul sau parola este greșit/ă', 'Închide',
          { duration: 2200 }) 
      });
    
    
  }
  IesiDinCont() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.ServiciuConturiService.ContulNuEsteConectat();
      this.Comenzi.length = 0;
      this.ServiciuConturiService.resetNumarComenzi();
      localStorage.removeItem('app.email');
      localStorage.removeItem('app.parola');
      this.cosService.golestelista();
      this.stergeInfo();
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      
    });
    
}

 

  async adudate() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    let i = 0;
    const q = query(collection(db, "Comenzi"), where('email', '==', this.ServiciuConturiService.GetEmail()));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      this.ServiciuConturiService.setNumarComenzi();
      this.Coduri.push(doc.id);

      this.Comenzi[i] = {
        Adresa: doc.data()['adresa'],
        Total: doc.data()['Total'],
        Plata: doc.data()['plata'],
        Data: doc.data()['Data'],
      };

      for (let j = 0; j < doc.data()['Produs'].length; j++) {
        this.ProduseDinComenzi[i].push({
          cantitate: doc.data()['Produs'][j].cantitate,
          numeimagine: doc.data()['Produs'][j].numeimagine,
          numeprodus: doc.data()['Produs'][j].numeprodus,
          pret: doc.data()['Produs'][j].pret,
        });
      }
      i++;
    });
  }
}


  

