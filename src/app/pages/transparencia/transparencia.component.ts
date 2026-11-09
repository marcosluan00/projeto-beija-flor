import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CATEGORIAS_TRANSPARENCIA, CategoriaTransparencia } from '../../shared/data/transparencia-data';

@Component({
  selector: 'app-transparencia',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './transparencia.component.html',
  styleUrl: './transparencia.component.css'
})
export class TransparenciaComponent {
  categorias: CategoriaTransparencia[] = CATEGORIAS_TRANSPARENCIA;

  // Guarda os IDs das categorias abertas (por padrão, a primeira aberta ou controle de toggle)
  categoriasAbertas: { [key: string]: boolean } = {
    'termos-fomento': true
  };

  // Modal para avisar com clareza caso cliquem em "Visualizar"
  modalAvisoAberto: boolean = false;
  documentoSelecionado: string = '';

  toggleCategoria(id: string): void {
    this.categoriasAbertas[id] = !this.categoriasAbertas[id];
  }

  isAberta(id: string): boolean {
    return !!this.categoriasAbertas[id];
  }

  abrirAviso(tituloDoc: string): void {
    this.documentoSelecionado = tituloDoc;
    this.modalAvisoAberto = true;
  }

  fecharModal(): void {
    this.modalAvisoAberto = false;
  }
}
