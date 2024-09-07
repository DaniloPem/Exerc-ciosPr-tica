import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css'],
})
export class SomaComponent {
  pergunta: string =
    'Observe o trecho do código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça {K = K +1; SOMA = SOMA + K} IMPRIMIR(SOMA);';
  indice: number = 12;
  resposta: string = this.acharNovoValorDeSoma();

  acharNovoValorDeSoma() {
    let k = 1;
    let soma = 0;
    while (k < this.indice) {
      k++;
      soma += k;
    }

    return `O valor da variável SOMA é ${soma}.`;
  }
}
