import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() data:any;
  game:any;

  constructor(){}

  ngOnInit(): void {
    this.game = this.data;
  }

}
