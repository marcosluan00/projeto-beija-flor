import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NoticiaDetalheComponent } from './pages/noticia-detalhe/noticia-detalhe.component';

export const routes: Routes = [

{ path:'', component:HomeComponent },
{ path:'institucional', component:InstitucionalComponent },
{ path:'projetos', component:ProjetosComponent },
{ path:'noticias', component:NoticiasComponent },
{ path:'noticias/:id', component:NoticiaDetalheComponent },
{ path:'galeria', component:GaleriaComponent },
{ path:'transparencia', component:TransparenciaComponent },
{ path:'contato', component:ContatoComponent }

];