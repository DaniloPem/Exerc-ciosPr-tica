import { Component } from '@angular/core';

@Component({
  selector: 'app-string-com-a',
  templateUrl: './string-com-a.component.html',
  styleUrls: ['./string-com-a.component.css'],
})
export class StringComAComponent {
  textoInserido!: string;
  result!: string;
  acharLetraA() {
    let letrasA = [...this.textoInserido.matchAll(/[Aa]/g)];
    this.result =
      letrasA.length > 0
        ? `O texto inserido tem ${letrasA?.length} letras "a"`
        : "O texto inserido não tem letras 'a'";
  }
}
