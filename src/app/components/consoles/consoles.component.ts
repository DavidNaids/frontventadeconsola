import { Component, OnInit } from '@angular/core';
import { ConsolesService } from '../../service/consoles.service';

export interface Game {
  name : string,
  description : string,
  company : string,
  img : string
}

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {

  items : Game [] = [];
  carrito : Game [] = [];

  constructor(private myservice:ConsolesService,
    ){}

  ngOnInit(){    
    this.getConsoles();
  }

  getConsoles(){
    this.myservice.getData2().subscribe( resp => {
      let aux:any = resp;
      this.items = aux.mensaje;
    })
  }

  addShop(element:any){
    let consoleSelected:any;
    this.myservice.getConsole(element).subscribe(resp =>{
      let aux:any = resp;
      consoleSelected = aux.mensaje;
    })
    this.carrito.push(consoleSelected);
    console.log("tienes actualmente estos productos : ",this.carrito)
  }

}
