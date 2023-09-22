import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';

import { CardapioComponent } from './components/pages/client/cardapio/cardapio.component';

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
import { SlideComponent } from './components/pages/client/slide/slide.component';
import { StoryComponent } from './components/pages/client/story/story.component';
import { BannerHomeComponent } from './components/pages/client/banner-home/banner-home.component';
import { CardapioPageComponent } from './components/pages/client/cardapio-page/cardapio-page.component';
import { BannerMenuComponent } from './components/pages/admin/banner-menu/banner-menu.component';



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
    HomeComponent,
    SlideComponent,
    StoryComponent,
    BannerHomeComponent,
    CardapioPageComponent,
    BannerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
