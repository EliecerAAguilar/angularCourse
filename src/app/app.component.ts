import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularCourse';
}

@Component({
  selector: 'fuzzbuzzApp',
  templateUrl: './reto01.component.html',
  styleUrls: ['./reto01.component.css'],
})
export class AppComponent2 {
  constructor() {}

  crearLista(): string[] {
    let lista: string[] = [];
    for (let i = 1; i <= 100; i++) {
      lista.push(String(i));
    }
    return lista;
  }
  num: string[] = this.crearLista();

  buzzBazz(num: string): string {
    if (Number(num) % 3 == 0) {
      return 'Buzz';
    }
    if (Number(num) % 5 == 0) {
      return 'Bazz';
    }
    if (Number(num) % 3 == 0 && Number(num) % 5 == 0) {
      return 'BuzzBazz';
    }
    return num;
  }
}
