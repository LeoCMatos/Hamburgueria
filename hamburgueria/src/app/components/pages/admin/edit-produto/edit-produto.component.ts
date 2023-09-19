import { Component } from '@angular/core';
import { HamburguerService } from 'src/app/services/hamburguer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent {


  NaoFinalizado: string[] = ['0','1']
  Disponibilidade: string[] = ['0','1']
  
  dadoHamburguer: any = {
    Nome: '', 
    Descricao: '',
    Preco: '',
    Categoria: '',
    Ingredientes: '',
    Imagem: '',
    Tempo_Preparo: '',
    Disponibilidade: '',
    Opcoes_Acompanhamento: '',
    Avaliacao: '',
    Calorias: '',
    promocao_do_dia: '',
    NaoFinalizado: '',
    Promocao: '',
    Ativar_Promocao: ''
  }


  
  constructor(private HamburguerService: HamburguerService,private route: ActivatedRoute, private router: Router, private messagesService: MessagesService) {}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.HamburguerService.getBurguer(id).subscribe(data => {
      this.dadoHamburguer = data
    })
  }

  errorCamposPrenchidos = 0

  salvarEdicao(): void{
    if(this.dadoHamburguer.Nome !== ''
    && this.dadoHamburguer.Descricao !== ''
    && this.dadoHamburguer.Preco !== ''
    && this.dadoHamburguer.Categoria !== ''
    && this.dadoHamburguer.Ingredientes !== ''
    && this.dadoHamburguer.Imagem !== ''
    && this.dadoHamburguer.Tempo_Preparo !== ''
    && this.dadoHamburguer.Opcoes_Acompanhamento !== ''
    && this.dadoHamburguer.Calorias !== ''
    && this.dadoHamburguer.promocao_do_dia !== ''
    && this.dadoHamburguer.Disponibilidade !== ''
    && this.dadoHamburguer.Ativar_Promocao !== ''
    ){
      this.dadoHamburguer.NaoFinalizado = 1
      this.HamburguerService.updateBurguer(this.dadoHamburguer.ID, this.dadoHamburguer).subscribe(() => {
        this.router.navigate(['/menu/edit-cardapio'])
        this.messagesService.add("Edição Salva!")
      })
    } else {
      this.messagesService.add("Preencha todos os campos!")    
      this.errorCamposPrenchidos = 1
    }

  }

  excluirRegistro(): void{
    this.HamburguerService.excluirRegistro(this.dadoHamburguer.ID.toString()).subscribe(() => {
      this.router.navigate(['/menu/edit-cardapio'])
      this.messagesService.add("Item  Excluido com sucesso!")

    })
  }
    
}
