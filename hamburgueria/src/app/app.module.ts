import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardapioComponent } from './components/pages/cardapio/cardapio.component';

import { LoginComponent } from './components/pages/admin/login/login.component';
import { MenuComponent } from './components/pages/admin/menu/menu.component';
import { EditHeaderComponent } from './components/pages/admin/edit-header/edit-header.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './components/pages/admin/create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCardapioComponent } from './components/pages/admin/edit-cardapio/edit-cardapio.component';
import { CadastrarProdutoComponent } from './components/pages/admin/cadastrar-produto/cadastrar-produto.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditProdutoComponent } from './components/pages/admin/edit-produto/edit-produto.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardapioComponent,
    LoginComponent,
    MenuComponent,
    EditHeaderComponent,
    CreateUserComponent,
    EditCardapioComponent,
    CadastrarProdutoComponent,
    FooterComponent,
    EditProdutoComponent,
    MessagesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
