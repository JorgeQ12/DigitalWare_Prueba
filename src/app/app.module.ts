import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './Components/clientes/clientes.component';

import { DxButtonModule,DxDataGridModule,DevExtremeModule } from 'devextreme-angular';
import { ProductosComponent } from './Components/productos/productos.component';
import { VentasProductosComponent } from './Components/ventas-productos/ventas-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProductosComponent,
    VentasProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DevExtremeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
