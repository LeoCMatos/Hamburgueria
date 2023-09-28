import { Component } from '@angular/core';
import { HamburguerService } from 'src/app/services/hamburguer.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  produto: any

  constructor(private HamburguerService: HamburguerService, private Router: Router, private route: ActivatedRoute){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.HamburguerService.getProduto(id).subscribe(data =>{
      this.produto = data
    })
  }
}
