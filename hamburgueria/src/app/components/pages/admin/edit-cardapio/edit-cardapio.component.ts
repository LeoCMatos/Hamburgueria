import { Component } from '@angular/core';
import { HamburguerService } from 'src/app/services/hamburguer.service';

@Component({
  selector: 'app-edit-cardapio',
  templateUrl: './edit-cardapio.component.html',
  styleUrls: ['./edit-cardapio.component.css']
})
export class EditCardapioComponent {
  dadosHamburguer: any


  constructor(private HamburguerService: HamburguerService){}

  ngOnInit(): void{
    this.HamburguerService.getProdutos().subscribe(data => {
      this.dadosHamburguer = data
      const preco = parseFloat(this.dadosHamburguer.Preco);
      const promocao = parseFloat(this.dadosHamburguer.Promocao);
    })
  }

  
}
