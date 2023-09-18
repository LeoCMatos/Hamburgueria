import { Component } from '@angular/core';
import { HamburguerService } from 'src/app/services/hamburguer.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  dadosHamburguer: any

constructor (private HamburguerService: HamburguerService) {}

  ngOnInit(): void {

    this.HamburguerService.getBurguers().subscribe(data =>{
      this.dadosHamburguer = data
    })
  }
}
