import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/pages/admin/menu/menu.component';
import { EditHeaderComponent } from './components/pages/admin/edit-header/edit-header.component';
import { EditCardapioComponent } from './components/pages/admin/edit-cardapio/edit-cardapio.component';
import { CadastrarProdutoComponent } from './components/pages/admin/cadastrar-produto/cadastrar-produto.component';
import { EditProdutoComponent } from './components/pages/admin/edit-produto/edit-produto.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CardapioPageComponent } from './components/pages/client/cardapio-page/cardapio-page.component';
import { ProdutoComponent } from './components/pages/client/produto/produto.component';
import { IngredientesComponent } from './components/pages/admin/ingredientes/ingredientes.component';
import { IngredientesEditComponent } from './components/pages/admin/ingredientes-edit/ingredientes-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'cardapio', component: CardapioPageComponent},
  { path: 'produto/:id', component: ProdutoComponent},
  { path: 'menu', redirectTo: 'menu/edit-cardapio', pathMatch: 'full'},
  { path: 'menu', component: MenuComponent, children:[
    {path: 'edit-header', component: EditHeaderComponent},
    {path: 'edit-cardapio', component: EditCardapioComponent},
    {path: 'cadastrar-produto', component: CadastrarProdutoComponent},
    {path: 'edit-produto/:id', component: EditProdutoComponent},
    {path: 'ingredientes', component: IngredientesComponent},
    {path: 'ingredientes/:id', component: IngredientesEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
