import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css'],
})
export class FibonacciComponent {
  numeroInserido!: number;
  result!: string;

  acharNumero() {
    this.result = '';
    if (this.numeroInserido < 0) {
      this.result = 'O número informado não pertence a sequência de Fibonacci';
    } else if (this.numeroInserido === 0 || this.numeroInserido === 1) {
      this.result = 'O número informado pertence a sequência de Fibonacci';
    } else {
      let proximoNumero = 0;
      let fibonacciNumeros: Array<number> = [0, 1];
      while (this.numeroInserido > proximoNumero) {
        let fibonacciNumerosLength = fibonacciNumeros.length;
        proximoNumero =
          fibonacciNumeros[fibonacciNumerosLength - 1] +
          fibonacciNumeros[fibonacciNumerosLength - 2];
        fibonacciNumeros.push(proximoNumero);
        this.result =
          proximoNumero === this.numeroInserido
            ? 'O número informado pertence a sequência de Fibonacci'
            : 'O número informado não pertence a sequência de Fibonacci';
      }
    }
  }
}
