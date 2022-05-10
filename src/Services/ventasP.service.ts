import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class VentasProducto{
    private UrlBack = "https://localhost:7130/"
    private apiBack = "api/ventas_Productos_Bk/";
    constructor(private http: HttpClient){}

    getListaVentasProductos(){
        return this.http.get(this.UrlBack + this.apiBack+"ListaVentasProductos");
    }
    updateVentaP(id: number, ventaP: any){
        return this.http.put(this.UrlBack + this.apiBack+"ActualizarVenta/"+id, ventaP);
    }
    delVentaP(id: number){
        return this.http.delete(this.UrlBack + this.apiBack+"EliminarVenta/"+id);
    }
    insertVentaP(ventaP: any){
        return this.http.post(this.UrlBack+this.apiBack+"AgregarVenta",ventaP);
    }
}