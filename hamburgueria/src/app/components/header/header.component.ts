import { Component } from '@angular/core';
import { Router, Navigation, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isHomePage = false
  isCardapioPage = false

  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.isHomePage = event.url === '/home'
        this.isCardapioPage = event.url === '/cardapio'
      }
    })
  }

}
