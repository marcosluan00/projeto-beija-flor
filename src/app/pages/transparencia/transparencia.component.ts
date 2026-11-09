import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  TRANSPARENCIA_RESUMO,
  INDICADORES_PORTAL,
  DOCUMENTOS_OFICIAIS,
  LANCAMENTOS_FINANCEIROS,
  PERGUNTAS_FREQUENTES_SIC,
  LancamentoFinanceiro,
  DocumentoOficial,
  TransparenciaResumo,
  IndicadorProjeto
} from '../../shared/data/transparencia-data';

@Component({
  selector: 'app-transparencia',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CurrencyPipe],
  templateUrl: './transparencia.component.html',
  styleUrl: './transparencia.component.css'
})
export class TransparenciaComponent {
  resumo: TransparenciaResumo = TRANSPARENCIA_RESUMO;
  indicadores: IndicadorProjeto[] = INDICADORES_PORTAL;
  documentos: DocumentoOficial[] = DOCUMENTOS_OFICIAIS;
  lancamentos: LancamentoFinanceiro[] = LANCAMENTOS_FINANCEIROS;
  perguntas = PERGUNTAS_FREQUENTES_SIC;

  // Filtros de Lançamentos Financeiros (Entradas e Saídas)
  filtroTipo: 'todos' | 'receita' | 'despesa' = 'todos';
  filtroBusca: string = '';
  filtroCategoria: string = 'todas';

  // Filtros de Documentos
  filtroTipoDoc: string = 'todos';

  // Pergunta FAQ aberta
  faqAberta: number | null = null;

  get categoriasDisponiveis(): string[] {
    const cats = new Set(this.lancamentos.map(l => l.categoria));
    return Array.from(cats);
  }

  get tiposDocumentosDisponiveis(): string[] {
    const tipos = new Set(this.documentos.map(d => d.tipo));
    return Array.from(tipos);
  }

  get lancamentosFiltrados(): LancamentoFinanceiro[] {
    return this.lancamentos.filter(item => {
      const matchTipo = this.filtroTipo === 'todos' || item.tipo === this.filtroTipo;
      const matchCat = this.filtroCategoria === 'todas' || item.categoria === this.filtroCategoria;
      const termo = this.filtroBusca.toLowerCase().trim();
      const matchBusca = !termo ||
        item.descricao.toLowerCase().includes(termo) ||
        item.origemDestino.toLowerCase().includes(termo) ||
        (item.documentoRef && item.documentoRef.toLowerCase().includes(termo)) ||
        item.fonteRecurso.toLowerCase().includes(termo);

      return matchTipo && matchCat && matchBusca;
    });
  }

  get documentosFiltrados(): DocumentoOficial[] {
    return this.documentos.filter(doc => {
      return this.filtroTipoDoc === 'todos' || doc.tipo === this.filtroTipoDoc;
    });
  }

  get totalReceitasFiltradas(): number {
    return this.lancamentosFiltrados
      .filter(l => l.tipo === 'receita')
      .reduce((acc, curr) => acc + curr.valor, 0);
  }

  get totalDespesasFiltradas(): number {
    return this.lancamentosFiltrados
      .filter(l => l.tipo === 'despesa')
      .reduce((acc, curr) => acc + curr.valor, 0);
  }

  toggleFaq(index: number): void {
    this.faqAberta = this.faqAberta === index ? null : index;
  }

  exportarCSV(): void {
    const cabecalho = ['ID', 'Data', 'Tipo', 'Categoria', 'Descricao', 'Origem/Destino', 'Documento Ref', 'Valor (R$)', 'Status', 'Fonte de Recurso'];
    const linhas = this.lancamentosFiltrados.map(l => [
      `"${l.id}"`,
      `"${l.data}"`,
      `"${l.tipo.toUpperCase()}"`,
      `"${l.categoria}"`,
      `"${l.descricao.replace(/"/g, '""')}"`,
      `"${l.origemDestino.replace(/"/g, '""')}"`,
      `"${l.documentoRef || '-'}"`,
      l.valor.toFixed(2),
      `"${l.status}"`,
      `"${l.fonteRecurso}"`
    ]);

    const csvContent = '\uFEFF' + [cabecalho.join(';'), ...linhas.map(row => row.join(';'))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `transparencia_beija_flor_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
