import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductoService{
    private UrlBack = "https://localhost:7130/"
    private apiBack = "api/Productos_Bk/";
    constructor(private http: HttpClient){}

    getListaProductos(){
        return this.http.get(this.UrlBack + this.apiBack+"ListaProductos");
    }
    updateProducto(id: number, Producto: any){
        return this.http.put(this.UrlBack + this.apiBack+"ActualizarProducto/"+id, Producto);
    }
    delProducto(id: number){
        return this.http.delete(this.UrlBack + this.apiBack+"EliminarProducto/"+id);
    }
    insertProducto(Producto: any){
        return this.http.post(this.UrlBack+this.apiBack+"AgregarProducto",Producto);
    }
}