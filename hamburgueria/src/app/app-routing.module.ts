import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/admin/login/login.component';
import { CardapioComponent } from './components/pages/cardapio/cardapio.component';
import { MenuComponent } from './components/pages/admin/menu/menu.component';
import { EditHeaderComponent } from './components/pages/admin/edit-header/edit-header.component';
import { CreateUserComponent } from './components/pages/admin/create-user/create-user.component';
import { EditCardapioComponent } from './components/pages/admin/edit-cardapio/edit-cardapio.component';
import { CadastrarProdutoComponent } from './components/pages/admin/cadastrar-produto/cadastrar-produto.component';
import { EditProdutoComponent } from './components/pages/admin/edit-produto/edit-produto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'cardapio', component: CardapioComponent},
  /*{ path: 'login', component: LoginComponent},*/
  { path: 'menu', component: MenuComponent, children:[
    {path: 'edit-header', component: EditHeaderComponent},
   /* {path: 'funcionario', component: CreateUserComponent},*/
    {path: 'edit-cardapio', component: EditCardapioComponent},
    {path: 'cadastrar-produto', component: CadastrarProdutoComponent},
    {path: 'edit-produto/:id', component: EditProdutoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
