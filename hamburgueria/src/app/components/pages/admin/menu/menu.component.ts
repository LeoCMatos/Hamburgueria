import { Component } from '@angular/core';
import { Router, Navigation, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isCardapioPage = false
  isEditProdutoPage = false

  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(this.isCardapioPage === false && this.isEditProdutoPage === false ){
        this.isCardapioPage = true 
      }
      if(event instanceof NavigationEnd){
        this.isCardapioPage = event.url === '/menu/edit-cardapio'
        this.isEditProdutoPage = event.url === '/menu/cadastrar-produto'
      }
    })
  }
  
}


