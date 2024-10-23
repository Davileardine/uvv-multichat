import {Routes} from '@angular/router';
import {MessagesComponent} from "./messages/messages.component";
import { MessageListComponent } from './messages/messagelist/messagelist.component';
import {AuthenticationComponent} from "./auth/authentication/authentication.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AUTH_ROUTES} from "./auth/auth.routers";
import {authGuard} from "./auth/auth.guard";


export const routes: Routes = [
  {path: '', redirectTo: '/lista', pathMatch: 'full'},
  {path: 'lista', component: MessageListComponent, title: 'Lista de Chat', canActivate: [authGuard]},

  {path: 'mensagens', component: MessagesComponent, title: 'Mensagens', canActivate: [authGuard]},
  {path: 'autenticacao', component: AuthenticationComponent, title: 'Autenticação', canActivate: [authGuard],
    children: AUTH_ROUTES},
    
  {path: '**', component: PageNotFoundComponent, title: 'Página não encontrada'}
];
