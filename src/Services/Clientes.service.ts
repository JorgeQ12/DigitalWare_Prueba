import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ClientesService{
    private UrlBack = "https://localhost:7130/"
    private apiBack = "api/Clientes_Bk/";
    constructor(private http: HttpClient){}

    getListaClientes(){
        return this.http.get(this.UrlBack + this.apiBack+"listaClientes");
    }
    getListaCliente(id: number){
        return this.http.get(this.UrlBack + this.apiBack+"listaClientes/"+id);
    }
    updateCliente(id: number, cliente: any){
        return this.http.put(this.UrlBack + this.apiBack+"ClienteActualizar/"+id, cliente);
    }
    delCliente(id: number){
        return this.http.delete(this.UrlBack + this.apiBack+"eliminarCliente/"+id);
    }
    insertCliente(cliente: any){
        return this.http.post(this.UrlBack+this.apiBack+"insertarCliente",cliente);
    }
}