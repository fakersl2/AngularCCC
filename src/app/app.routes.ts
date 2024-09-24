/* ARQUIVO RESPONSAVEL POR MANIPULAR AS ROTAS DO SITE */

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {

        path: 'home',
        component: HomeComponent,
    },
    {

        path: 'produtos',
        component: ProdutosComponent,
    }
];
