import { Component, OnInit } from '@angular/core';
import { productoDb } from 'src/app/Interfaces/productoDb';
import { ProductoService } from 'src/Services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaProducto: productoDb[] = [];
  
  constructor(private Productos: ProductoService) { }

  ngOnInit(): void {
    this.getProducto();
  }
  getProducto(){
    this.Productos.getListaProductos().subscribe((data:any)=>
    {
      this.listaProducto = data;
    },error => {
      console.log(error)
    });
  }
  deleteProducto(event: any){
    let idProducto = event.data.producto_Id;
    this.Productos.delProducto(idProducto).subscribe((data:any) => 
    { 
      this.getProducto();
    },error =>
    {
      console.log(error);
    })
  }
  actualizarProducto(event: any){
    let idProducto = event.data.producto_Id;
    this.Productos.updateProducto(idProducto,event.data).subscribe((data:any) => 
    {
      this.getProducto();
    },error =>
    {
      console.log(error);
    })
  }
  insertarProducto(event: any){
    let jsonAux: any = {
      Producto_Nombre: event.data.producto_Nombre,
      Producto_Precio: event.data.producto_Precio,
      Producto_Cantidad: event.data.producto_Cantidad
    }
    this.Productos.insertProducto(jsonAux).subscribe((data:any) => 
    {
      this.getProducto();
    },error =>
    {
      console.log(error);
    })
  }
}
