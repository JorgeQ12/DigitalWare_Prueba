import { Component, OnInit } from '@angular/core';
import {ClientesService} from 'src/Services/Clientes.service';
import {clienteDb} from  'src/app/Interfaces/clienteDb';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes: clienteDb[] = [];
  constructor(private Clientes: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.Clientes.getListaClientes().subscribe((data:any)=>
    {
      this.listaClientes=data;
    },error => {
      console.log(error)
    });
  }
  buscarCliente(id: number){
    this.listaClientes = [];
    this.Clientes.getListaCliente(id).subscribe((data:any) =>{
      this.listaClientes=data;
    })
  }
  deleteCliente(event: any){
    let idCliente = event.data.clientes_Id;
    this.Clientes.delCliente(idCliente).subscribe((data:any) => 
    { 
      this.getClientes();
    },error =>
    {
      console.log(error);
    })
  }
  actualizarCliente(event: any){
    let idCliente = event.data.clientes_Id;
    this.Clientes.updateCliente(idCliente,event.data).subscribe((data:any) => 
    {
      this.getClientes();
    },error =>
    {
      console.log(error);
    })
  }
  insertarCliente(event: any){
    let jsonAux: any = {
      Clientes_Nombre: event.data.clientes_Nombre,
      Clientes_Identificacion: event.data.clientes_Identificacion,
      Clientes_Edad: event.data.clientes_Edad
    }
    this.Clientes.insertCliente(jsonAux).subscribe((data:any) => 
    {
      this.getClientes();
    },error =>
    {
      console.log(error);
    })
  }
}
