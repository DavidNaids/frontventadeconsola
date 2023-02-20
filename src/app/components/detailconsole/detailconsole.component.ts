import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolesService } from '../../service/consoles.service';

@Component({
  selector: 'app-detailconsole',
  templateUrl: './detailconsole.component.html',
  styleUrls: ['./detailconsole.component.css']
})
export class DetailconsoleComponent {
  game:any;

  constructor(private activatedRoute: ActivatedRoute, private service: ConsolesService){
    this.activatedRoute.params.subscribe( data => {
      this.service.getConsole(data['id']).subscribe(resp =>{
        let aux:any = resp;
        this.game = aux.mensaje;
      })
    })
  }

}
