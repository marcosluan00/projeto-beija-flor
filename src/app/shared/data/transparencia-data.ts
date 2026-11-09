export interface TransparenciaResumo {
  orcamentoTotal: number | null;
  totalReceitas: number | null;
  totalDespesas: number | null;
  saldoAtual: number | null;
  anoExercicio: number;
  statusExecucao: string;
  mensagemManutencao: string;
}

export interface LancamentoFinanceiro {
  id: string;
  data: string;
  tipo: 'receita' | 'despesa';
  categoria: string;
  descricao: string;
  origemDestino: string;
  documentoRef?: string;
  valor: number;
  status: 'liquidado' | 'em processamento' | 'planejado';
  fonteRecurso: string;
}

export interface DocumentoOficial {
  id: string;
  titulo: string;
  tipo: 'Termo de Fomento' | 'Edital' | 'Prestação de Contas' | 'Relatório de Atividades' | 'Nota de Esclarecimento' | 'Certidão';
  descricao: string;
  ano: number;
  dataPublicacao: string;
  tamanho: string;
  status: 'Em Homologação' | 'Aguardando Publicação' | 'Disponível';
  orgaoConcedente?: string;
}

export interface IndicadorProjeto {
  titulo: string;
  valor: string;
  subtitulo: string;
  icone: string;
}

export const TRANSPARENCIA_RESUMO: TransparenciaResumo = {
  anoExercicio: 2025,
  orcamentoTotal: null,
  totalReceitas: null,
  totalDespesas: null,
  saldoAtual: null,
  statusExecucao: 'Em Fase de Consolidação Contábil',
  mensagemManutencao: 'Módulo em conformidade técnica com as diretrizes da Lei nº 12.527/2011 (LAI) e Lei nº 13.019/2014 (MROSC). Os demonstrativos contábeis e fiscais do exercício estão em processo de consolidação e auditoria para publicação oficial.'
};

export const INDICADORES_PORTAL: IndicadorProjeto[] = [
  {
    titulo: 'Estrutura e-SIC',
    valor: 'Ativo',
    subtitulo: 'Canal de atendimento ao cidadão disponível',
    icone: 'users'
  },
  {
    titulo: 'Exercício Vigente',
    valor: '2025',
    subtitulo: 'Prestação de contas em consolidação',
    icone: 'folder'
  },
  {
    titulo: 'Padrão Regulatório',
    valor: 'MROSC',
    subtitulo: 'Em estrita conformidade com a Lei 13.019/14',
    icone: 'chart'
  },
  {
    titulo: 'Certidões & Regularidade',
    valor: 'Em Dia',
    subtitulo: 'Documentação institucional regularizada',
    icone: 'check-circle'
  }
];

// Documentos oficiais em fase de homologação / publicação oficial
export const DOCUMENTOS_OFICIAIS: DocumentoOficial[] = [
  {
    id: 'DOC-CONF-001',
    titulo: 'Termo de Fomento / Parceria Institucional',
    tipo: 'Termo de Fomento',
    descricao: 'Instrumento jurídico e minuta aprovada de fomento cultural em fase final de publicação nos diários oficiais.',
    ano: 2025,
    dataPublicacao: 'Em processamento',
    tamanho: 'PDF Oficial',
    status: 'Em Homologação',
    orgaoConcedente: 'Órgão Governamental Concedente'
  },
  {
    id: 'DOC-CONF-002',
    titulo: 'Plano de Trabalho e Cronograma Físico-Financeiro',
    tipo: 'Edital',
    descricao: 'Detalhamento do escopo de metas, cronograma de desembolso e destinação das dotações.',
    ano: 2025,
    dataPublicacao: 'Em processamento',
    tamanho: 'PDF Oficial',
    status: 'Aguardando Publicação',
    orgaoConcedente: 'Poder Público / Comissão de Avaliação'
  },
  {
    id: 'DOC-CONF-003',
    titulo: 'Relatório Trimestral de Acompanhamento e Execução',
    tipo: 'Relatório de Atividades',
    descricao: 'Demonstrativo físico de oficinas, ensaios e montagem cênica a ser liberado após o primeiro ciclo avaliativo.',
    ano: 2025,
    dataPublicacao: 'Aguardando encerramento de ciclo',
    tamanho: 'PDF Oficial',
    status: 'Aguardando Publicação'
  },
  {
    id: 'DOC-CONF-004',
    titulo: 'Certidões Negativas de Débitos Fiscais e Trabalhistas (CND)',
    tipo: 'Certidão',
    descricao: 'Comprovações de regularidade perante a Receita Federal, FGTS e Justiça do Trabalho disponíveis para consulta.',
    ano: 2025,
    dataPublicacao: 'Atualizado periodicamente',
    tamanho: 'PDF Oficial',
    status: 'Em Homologação'
  }
];

// Lista vazia para garantir que nenhum dado financeiro fictício seja exibido
export const LANCAMENTOS_FINANCEIROS: LancamentoFinanceiro[] = [];

export const PERGUNTAS_FREQUENTES_SIC = [
  {
    pergunta: 'Como funciona o processo de publicação e auditoria dos recursos?',
    resposta: 'Os dados do Portal da Transparência são integrados após a liquidação oficial das notas fiscais e a homologação das contas pelo órgão governamental concedente, garantindo estrita veracidade e ausência de divergências contábeis.'
  },
  {
    pergunta: 'Como solicitar demonstrativos ou certidões de forma direta (e-SIC)?',
    resposta: 'Em cumprimento à Lei de Acesso à Informação (Lei nº 12.527/2011), o cidadão ou fiscalizador pode acionar nossa Ouvidoria através do formulário de contato ou pelo e-mail institucional oficial, com protocolo e acompanhamento.'
  },
  {
    pergunta: 'Onde encontro o Termo de Colaboração / Fomento após publicado?',
    resposta: 'Assim que disponibilizado no Diário Oficial e homologado pelos órgãos de fiscalização, os arquivos são disponibilizados em formato PDF no repositório de documentos deste portal com acesso público e irrestrito.'
  }
];
