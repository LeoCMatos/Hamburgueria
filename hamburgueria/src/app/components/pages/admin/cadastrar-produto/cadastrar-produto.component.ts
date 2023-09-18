import { Component } from '@angular/core';
import { HamburguerService } from 'src/app/services/hamburguer.service';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-cadrastar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {

  novoRegistro: any = {
    Nome: '', 
    Descricao: '',
    Preco: '',
    Categoria: '',
    Ingredientes: 'Nenhum',
    Imagem: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Item_sem_imagem.svg',
    Tempo_Preparo: 0,
    Disponibilidade: 0,
    Opcoes_Acompanhamento: 'Nenhum',
    Avaliacao: 0,
    Calorias: 0,
    promocao_do_dia: 'Nenhum dia',
    NaoFinalizado: 0,
    Promocao: 0,
    Ativar_Promocao: 0
  }

  errorCamposPrenchidos = 0


  constructor(private HamburguerService: HamburguerService, private router: Router, private messagesService: MessagesService){}

  insertBurguer():void {
    if(this.novoRegistro.Nome !== '' 
    && this.novoRegistro.Descricao !== '' 
    && this.novoRegistro.Preco !== ''
    && this.novoRegistro.Categoria !== ''){
      console.log('teste')
      this.HamburguerService.insertBurguer(this.novoRegistro).subscribe(response => {
        this.novoRegistro = {
          Nome: '', 
          Descricao: '',
          Preco: '',
          Categoria: '',
          Ingredientes: 'Nenhum',
          Imagem: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Item_sem_imagem.svg',
          Tempo_Preparo: 0,
          Disponibilidade: 0,
          Opcoes_Acompanhamento: 'Nenhum',
          Avaliacao: 0,
          Calorias: 0,
          promocao_do_dia: 'Nenhum dia',
          NaoFinalizado: 0,
          Promocao: 0,
          Ativar_Promocao: 0
        }
        this.messagesService.add("Produto cadastrado com sucesso!")
        this.router.navigate(['/menu/edit-cardapio']);
      })
    } else {
      this.messagesService.add("Preencha todos os campos!")    
      this.errorCamposPrenchidos = 1
      
    }

  }
}
