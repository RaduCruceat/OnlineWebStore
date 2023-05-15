import { Injectable } from '@angular/core';

type Produs = {
  pret: number;
  numeimagine: string;
  numeprodus: string;
  cantitate: number;
};


@Injectable({
  providedIn: 'root'
})
export class CosService {

  obiecteincos: number = 0;
  produs: string = '';
  imagine: string = '';
  pret: number = 0.00;
  cantitate: number = 0;
  sum: number = 0.0;
  transport: number = 25.0;
  total: number = 0.0;
  Produse: Array<Produs> = [];

  constructor() { }
  getProduse(): Array<Produs> { return this.Produse }
  getobiectincos() { return this.obiecteincos; }
  gettotal() { return this.total; }
  gettransport() { return this.transport }
  transportnormal() { this.transport = 25.0; }
  transportgratis() { this.transport = 0.0; }
  getprettotal() { return this.sum }

  setProduse(Produs: Produs)
  {
    this.Produse.push(Produs);
  }
  adaugaobiectincos(i: number)
  {
    this.obiecteincos += 1;
  }
  stergeobiectincos(i: number)
  {
    this.obiecteincos -= 1;
    this.Produse.splice(i, 1); 
  }
  setprettotal(i: number)
  {
    this.sum = Number(this.sum) + Number(i);
    if (this.sum > 300.0) {this.transportgratis();}
    else { this.transportnormal() }
    this.total = this.sum + this.transport;
  }
  scadeprettotal(i: number)
  {
    this.sum = Number(this.sum) - Number(i);
    if (this.sum < 300.0) {this.transportnormal();}
    else { this.transportgratis(); }
    this.total = this.sum + this.transport;
  }
  adaugacantitate(i: number)
  {
    this.setprettotal(Number((Math.round((this.Produse[i].pret) / Number(this.Produse[i].cantitate) * 100) / 100).toFixed(2)));
    this.Produse[i].pret = Number((Math.round((Number(this.Produse[i].pret) + Number(this.Produse[i].pret) / Number(this.Produse[i].cantitate)) * 100) / 100).toFixed(2))
    this.Produse[i].cantitate = this.Produse[i].cantitate + 1;
    this.obiecteincos = this.obiecteincos + 1; 
  }
  scadecantitate(i: number):number
  {
    this.scadeprettotal(Number((Math.round((this.Produse[i].pret) / Number(this.Produse[i].cantitate) * 100) / 100).toFixed(2)));
    this.Produse[i].pret = Number((Math.round((Number(this.Produse[i].pret) - Number(this.Produse[i].pret) / Number(this.Produse[i].cantitate)) * 100) / 100).toFixed(2))
    this.obiecteincos = this.obiecteincos - 1;
    if (this.Produse[i].cantitate == 1)
    {
      this.obiecteincos = this.obiecteincos + 1;
      return 1;
    }
    else
    {
      this.Produse[i].cantitate = this.Produse[i].cantitate - 1;
      return 0;
    }
  }
  golestelista()
  {
    this.obiecteincos = 0;
    this.Produse.length = 0;
  }
}
