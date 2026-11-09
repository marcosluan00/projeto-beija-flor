export interface DocumentoCard {
  titulo: string;
  subtitulo?: string;
  arquivoUrl?: string;
  status: 'aguardando' | 'disponivel';
}

export interface CategoriaTransparencia {
  id: string;
  nome: string;
  descricao?: string;
  documentos: DocumentoCard[];
}

export const CATEGORIAS_TRANSPARENCIA: CategoriaTransparencia[] = [
  {
    id: 'termos-fomento',
    nome: 'Termos de Fomento',
    descricao: 'Instrumentos jurídicos de parceria, repasse e fomento cultural celebrados com o poder público.',
    documentos: [
      {
        titulo: 'Termo de Fomento - Projeto Cultural Junino',
        subtitulo: 'Instrumento de Parceria e Fomento',
        status: 'aguardando'
      },
      {
        titulo: 'Plano de Trabalho e Aplicação de Recursos',
        subtitulo: 'Cronograma Físico-Financeiro',
        status: 'aguardando'
      }
    ]
  },
  {
    id: 'notas-transparencia',
    nome: 'Notas de Transparência',
    descricao: 'Demonstrativos contábeis, extratos de conciliação bancária vinculada e relatórios parciais de prestação de contas.',
    documentos: [
      {
        titulo: 'Nota de Transparência - Prestação de Contas',
        subtitulo: 'Relatório Contábil Consolidado',
        status: 'aguardando'
      },
      {
        titulo: 'Balancete Financeiro do Exercício',
        subtitulo: 'Demonstrativo de Receitas e Despesas',
        status: 'aguardando'
      }
    ]
  },
  {
    id: 'notas-publicidade',
    nome: 'Notas de Publicidade',
    descricao: 'Declarações e comprovações de cumprimento das exigências de publicidade legal dos incentivos públicos.',
    documentos: [
      {
        titulo: 'Nota de Publicidade Institucional',
        subtitulo: 'Comprovação de Divulgação Oficial',
        status: 'aguardando'
      }
    ]
  }
];
