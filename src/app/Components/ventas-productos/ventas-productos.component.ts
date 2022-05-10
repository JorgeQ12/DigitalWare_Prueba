import { Component, OnInit } from '@angular/core';
import { ventasProductos } from 'src/app/Interfaces/ventasProductos';
import { VentasProducto } from 'src/Services/ventasP.service';

@Component({
  selector: 'app-ventas-productos',
  templateUrl: './ventas-productos.component.html',
  styleUrls: ['./ventas-productos.component.css']
})
export class VentasProductosComponent implements OnInit {

  listaVentaP: ventasProductos[] = [];

  constructor(private VentasP: VentasProducto) { }

  ngOnInit(): void {
    this.getVentaP();
  }
  getVentaP(){
    this.VentasP.getListaVentasProductos().subscribe((data:any)=>
    {
      this.listaVentaP = data;
    },error => {
      console.log(error)
    });
  }
  deleteVentaP(event: any){
    let idProducto = event.data.producto_Id;
    this.VentasP.delVentaP(idProducto).subscribe((data:any) => 
    { 
      this.getVentaP();
    },error =>
    {
      console.log(error);
    })
  }
  actualizarVentaP(event: any){
    let idProducto = event.data.producto_Id;
    this.VentasP.updateVentaP(idProducto,event.data).subscribe((data:any) => 
    {
      this.getVentaP();
    },error =>
    {
      console.log(error);
    })
  }
  insertarVentaP(event: any){
    let jsonAux: any = {
      VentasP_Comprador: event.data.ventasP_Comprador,
      VentasP_Nombre: event.data.ventasP_Nombre,
      VentasP_Cantidad: event.data.ventasP_Cantidad,
      VentasP_Fecha: event.data.ventasP_Fecha,
      VentasP_PrecioF: event.data.ventasP_PrecioF
    }
    this.VentasP.insertVentaP(jsonAux).subscribe((data:any) => 
    {
      this.getVentaP();
    },error =>
    {
      console.log(error);
    })
  }
}
