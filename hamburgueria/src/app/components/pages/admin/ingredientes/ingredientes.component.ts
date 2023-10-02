//
import { Component } from '@angular/core';
import { IngredientesService } from 'src/app/services/ingredientes.service';
@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent {
  ingredientes: any



  constructor(private IngredientesService: IngredientesService){}

  ngOnInit():void{
    this.IngredientesService.getIngredientes().subscribe(data => {
      this.ingredientes = data
    })
  }
}