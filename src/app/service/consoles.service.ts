import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  constructor(private http:HttpClient) { }

  private urlApi = "http://localhost:3000/";

  getData2(){
    return this.http.get(this.urlApi+'products')
  }

  getConsole(id:any){
    return this.http.get(`${this.urlApi}products/${id}`)
  }
  
  saveConsole(console:any){
    return this.http.get(this.urlApi + 'products', console)
  }
}
