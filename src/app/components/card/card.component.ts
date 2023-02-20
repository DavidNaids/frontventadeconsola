import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() dataInput:any = {name:"", description:"", company:"", img:""};
  @Input() indexInput: number = 0;
  @Output() selectGame: EventEmitter<any>

  constructor(private router: Router){
    this.selectGame = new EventEmitter();
  }

  ngOnInit(): void {
    
  }

  buyGame(){    
    this.selectGame.emit(this.indexInput);
  }

  detailsGame(index : number){
    this.router.navigate(['/game', index]);
  }

}
