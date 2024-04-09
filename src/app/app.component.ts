import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dados';

  dadoizquierda = '../assets/img/dice1.png';
  dadoDerecha = '../assets/img/dice2.png';
  numero1: number;
  numero2: number;

  constructor() {
    this.numero1 = 1;
    this.numero2 = 2;
  }

  tirarDados(): void {
    //Esto me permite tener numeros aleatorios entre 1 y 5
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoizquierda = `../assets/img/dice${this.numero1}.png`;
    this.dadoDerecha = `../assets/img/dice${this.numero2}.png`;
    console.log(this.numero1);
    console.log(this.numero2);
    console.log(this.dadoizquierda);
    console.log(this.dadoDerecha);
  }
}
