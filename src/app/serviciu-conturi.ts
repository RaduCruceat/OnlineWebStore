import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiciuConturiService
{
  constructor() { }
  conectat = false;
  email: string = '';
  parola: string = '';
  valueEmail:string | null='';
  valueParola: string | null = '';
  emails: Array<string> = [];
  numarcomenzi: number = 0;

  getemail() { return this.emails }
  setNumarComenzi() { this.numarcomenzi += 1 }
  getNumarComenzi() { return this.numarcomenzi }
  resetNumarComenzi() { this.numarcomenzi = 0 }

  async ConecteazaCont()
  {
    this.valueEmail = localStorage.getItem('app.email');
    this.valueParola = localStorage.getItem('app.parola');   
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    let a = '';
    let b = '';

    if (this.valueParola != null)
      if (this.valueEmail != null)
      {
        a = this.valueEmail;
        b = this.valueParola;  
      }
    signInWithEmailAndPassword(auth,a, b)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.ContulEsteConectat();
        localStorage.setItem('app.email', a);
        localStorage.setItem('app.parola', b);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.ContulNuEsteConectat();
      });
  }
  ContulNuEsteConectat()
  {
    this.conectat = false;
  }
  ContulEsteConectat()
  {
    this.conectat = true;
  }
  GetConectat() {
    return this.conectat;
  }
  GetEmail()
  {
    const value = localStorage.getItem('app.email')
    if (value) { this.email = value; }
    return this.email;
  }
  SetEmail(a: string) {
    this.email = a;
    const value = a;
    localStorage.setItem('app.email', value);
  }
  SetParola(a: string)
  {
    this.parola = a
    const value = a;
    localStorage.setItem('app.parola', value);
  }
}
