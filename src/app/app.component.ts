import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mClientes: Boolean = false;
  mVentas: Boolean = false;
  mProductos: Boolean = true;

  title = 'FrontDigital';

  moduloP(){
    this.mClientes = false;
    this.mVentas = false;
    this.mProductos = true;
  }
  moduloC(){
    this.mClientes = true;
    this.mVentas = false;
    this.mProductos = false;
  }
  moduloV(){
    this.mClientes = false;
    this.mVentas = true;
    this.mProductos = false;
  }
}
