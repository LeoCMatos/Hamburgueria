import { Component } from '@angular/core';
import { HamburguerService } from 'src/app/services/hamburguer.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  dadosLanches: any
  dadosBebidas: any
  dadosAcompanhamentos:any


constructor (private HamburguerService: HamburguerService) {}
  all = 1
  burger = 0
  drinks = 0
  addOns = 0
  
  ngOnInit(): void {
    this.HamburguerService.getLanches().subscribe(data =>{
      this.dadosLanches = data
    })

    this.HamburguerService.getBebidas().subscribe(data =>{
      this.dadosBebidas = data
    })

    this.HamburguerService.getAcompanhamentos().subscribe(data =>{
      this.dadosAcompanhamentos = data
    })
  }

  
  
  todos(){
    this.all = 1
    this.burger = 0
    this.drinks = 0
    this.addOns = 0
  }

  lanches(){
    this.all = 0
    this.burger = 1
    this.drinks = 0
    this.addOns = 0
  }

  bebidas(){
    this.all = 0
    this.burger = 0
    this.drinks = 1
    this.addOns = 0
  }

  acompanhamentos(){
    this.all = 0
    this.burger = 0
    this.drinks = 0
    this.addOns = 1
  }
}
