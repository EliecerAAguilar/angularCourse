import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent3 } from './reto02.component';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import { AnagramaServiceService } from './anagrama/anagrama-service.service';
import { GridComponent } from './gallery/grid/grid.component';

@NgModule({
  declarations: [AppComponent, GridComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AgGridModule,
  ],
  providers: [AnagramaServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
