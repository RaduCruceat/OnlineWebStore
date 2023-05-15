import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { MatSnackBar } from '@angular/material/snack-bar';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../environments/environment';
import { ServiciuConturiService } from '../serviciu-conturi';

@Component({
  selector: 'app-contnou',
  templateUrl: './contnou.component.html',
  styleUrls: ['./contnou.component.css']
})

export class ContnouComponent
{
  constructor(private router: Router, public ServiciuConturiService: ServiciuConturiService, private snackbar: MatSnackBar) {  }

  hide = true;
  butoninchis = true;
  toggleBool: boolean = true;
  email: string = '';
  parola: string = '';
  ngOnInit()
  {
    this.ServiciuConturiService.ConecteazaCont();
  }
  butoncont() { this.router.navigateByUrl('/cont'); }
  butonpaginatermeni() { this.router.navigateByUrl('/paginatermeni'); }
  apasatBifa(event: MatCheckboxChange): void
  {
    this.butoninchis = !this.butoninchis;
  };
 CreeazaCont()
 {
   const app = initializeApp(firebaseConfig);
   const auth = getAuth();
   createUserWithEmailAndPassword(auth, this.email , this.parola)
     .then((userCredential) => {
       // Signed in
       const user = userCredential.user;
       this.snackbar.open('Contul a fost creeat', 'Închide',
         { duration: 2200 }) 
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       this.snackbar.open('Email-ul este incorect/deja înregistrat', 'Închide',
         { duration: 2200 }) 
       // ..
     });
   
 }

 
  
}



