import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FizzbuzzService {
  constructor() {}

  crearLista(): string[] {
    let lista: string[] = [];
    for (let i = 1; i <= 100; i++) {
      lista.push(String(i));
    }
    return lista;
  }

  fizzbuzz(num: string): string {
    if (parseInt(num) % 3 === 0 && parseInt(num) % 5 === 0) {
      return 'fizzBuzz';
    }

    if (parseInt(num) % 5 === 0) {
      return 'Buzz';
    }

    if (parseInt(num) % 3 === 0) {
      return 'fizz';
    }

    return num;
  }

  Fizzbuzz(lista: string[]): string[] {
    lista.forEach((element, index) => {
      lista[index] = this.fizzbuzz(element);
    });
    return lista;
  }

  main(): string[] {
    let num: string[] = this.crearLista();
    num = this.Fizzbuzz(num);
    return num;
  }

  getvalue(index: number): string {
    return this.main()[index].toString();
  }
}
