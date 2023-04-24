import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './reto02.grid.component.html',
  styleUrls: ['./reto02.content.scss'],
})
export class AppComponent3 {
  columnas: ColDef[] = [
    { field: 'fabricante' },
    { field: 'modelo' },
    { field: 'precio' },
  ];

  Data = [{ fabricante: 'Toyota', modelo: 'Celica', precio: 35000 }];
}
