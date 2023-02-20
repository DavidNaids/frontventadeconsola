import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsolesService } from '../../service/consoles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newconsole',
  templateUrl: './newconsole.component.html',
  styleUrls: ['./newconsole.component.css']
})
export class NewconsoleComponent {

  forma: FormGroup;
  constructor(private fb:FormBuilder,
    private consoleService: ConsolesService,
    private router: Router){

      this.forma = this.fb.group({
        titulo : ['',[Validators.required, Validators.minLength(2)]],
        descripcion : ['',[Validators.required, Validators.minLength(2)]],
        compañia : ['',[Validators.required, Validators.minLength(2)]],
        imagen : ['',[Validators.required]]
      })
    
  }

  guardar(){
    this.createConsole();
  }

  createConsole(){
    let obj = {
      name : this.forma.get('titulo')?.value,
      description : this.forma.get('descripcion')?.value,
      company : this.forma.get('compañia')?.value,
      img :"./assets/images/" +this.forma.get('imagen')?.value,
    }
    this.consoleService.saveConsole(obj).subscribe(resp =>{

    });
    this.router.navigate(['/consoles']);
  }

}
