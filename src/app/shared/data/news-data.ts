export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  readTime: string;
  tags: string[];
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'campea-2025',
    title: 'Espetáculo "As Cores do Amor" consagra Junina Beija-Flor como Grande Campeã',
    date: '15 de Julho, 2025',
    category: 'Concurso Junino',
    excerpt: 'Em 2025, o Instituto Beija-Flor escolheu uma temática social profunda: "As Cores do Amor". O resultado foi o título de grande campeã da competição.',
    content: `
      <p class="text-xl md:text-2xl font-serif text-brand-terracota leading-relaxed mb-8 italic">
        "Foi uma jornada intensa de meses de ensaio, pesquisa histórica e engajamento da comunidade que culminou em uma apresentação inesquecível."
      </p>
      <p>Na noite do último sábado, a Junina Beija-Flor brilhou intensamente e arrebatou não apenas os jurados, mas todo o público presente com seu espetáculo inédito "As Cores do Amor". Com figurinos deslumbrantes e coreografias marcadas por uma precisão impressionante, o grupo se consagrou o grande campeão do festival.</p>
      <h3>O Processo Criativo</h3>
      <p>A direção artística deste ano propôs um mergulho profundo nas raízes culturais do estado de Roraima, homenageando as lendas locais e a diversidade da nossa terra. "A ideia sempre foi mostrar que a tradição caipira pode dialogar com o espetáculo cênico moderno", explica a equipe.</p>
      <p>Os destaques do desfile foram os adereços sustentáveis, desenvolvidos em parceria com comunidades ribeirinhas, utilizando fibras naturais e elementos reciclados, provando o compromisso do Instituto Beija-Flor com a responsabilidade ambiental.</p>
    `,
    image: 'beija-flor-junina-apresentacao-2025-sim-03.png',
    author: 'Diretoria Instituto Beija-Flor',
    readTime: '5 min',
    tags: ['Quadrilha', 'Campeonato', 'Cultura']
  },
  {
    id: 'live-2020-2021',
    title: 'A reinvenção na Pandemia: Live "Xangô o Rei Menino"',
    date: '15 de Junho, 2020',
    category: 'História',
    excerpt: 'Houve notável reinvenção. As tradicionais festas adaptaram-se ao formato de transmissões ao vivo.',
    content: `
      <p>Durante o período de restrições, o Instituto Beija-Flor não parou. A cultura encontrou um novo palco: as telas. Com a live "Xangô o Rei Menino", conseguimos levar a alegria do São João para dentro das casas de milhares de roraimenses.</p>
      <h3>Adaptação e Tecnologia</h3>
      <p>O desafio foi transformar um espetáculo de arena em algo pensado para a câmera. Ensaios com distanciamento, máscaras e muita produção audiovisual foram necessários. O tema trouxe a força e a ancestralidade africana, conectando nossas raízes com o presente.</p>
      <p>A recepção foi calorosa, com milhares de visualizações e um feedback emocionante de quem sentia falta da energia dos arraiais. Essa experiência fortaleceu nossa capacidade de nos adaptarmos a qualquer cenário.</p>
    `,
    image: 'beija-flor-junina-2020-01-sim.png',
    author: 'Comunicação Beija-Flor',
    readTime: '4 min',
    tags: ['Live', 'Pandemia', 'Cultura']
  },
  {
    id: 'circulação-municipios',
    title: 'Circulação Cultural: Beija-Flor leva oficinas para municípios do interior',
    date: '10 de Agosto, 2023',
    category: 'Cultura Viva',
    excerpt: 'O Instituto realizou edições em Bonfim, Pacaraima, Iracema e Boa Vista, com eventos juninos e oferecimento de oficinas.',
    content: `
      <p>Levar a cultura além da capital sempre foi um dos nossos pilares. Em 2023, o projeto Circulação Cultural percorreu o interior de Roraima, transformando vidas através da arte.</p>
      <h3>Oficinas e Showcases</h3>
      <p>Em Bonfim, Pacaraima e Iracema, nossa equipe ministrou oficinas de confecção de chapéus artesanais e técnicas de dança junina. Mais do que ensinar uma técnica, o objetivo foi fomentar a economia criativa local e dar novas perspectivas para a juventude.</p>
      <p>O encerramento de cada etapa contou com uma apresentação especial, unindo nossos dançarinos aos alunos locais, celebrando a integração e o fortalecimento da nossa identidade regional.</p>
    `,
    image: 'beija-flor-junina-08-sim.png',
    author: 'Projetos Sociais',
    readTime: '6 min',
    tags: ['Interior', 'Oficinas', 'Social']
  },
  {
    id: 'bloco-me-beija',
    title: 'Bloco “Me Beija” arrasta uma multidão na avenida em Boa Vista',
    date: '13 de Fevereiro, 2024',
    category: 'Carnaval',
    excerpt: 'A tradição se consolidou. O Bloco Me Beija desfilou na avenida em 2024 contagiando um público de mais de 600 foliões.',
    content: `
      <p>O Carnaval de Boa Vista ganhou um colorido especial com a passagem do Bloco Me Beija. O que começou como uma reunião de amigos do Instituto tornou-se um dos blocos mais aguardados da capital.</p>
      <h3>Alegria e Segurança</h3>
      <p>Em 2024, focamos em um carnaval para todos: seguro, organizado e extremamente animado. Com abadás personalizados e uma banda de sopro que resgatou as marchinhas e os sucessos do axé, garantimos que ninguém ficasse parado.</p>
      <p>O bloco também desfilou com uma ala dedicada à sustentabilidade, utilizando materiais reciclados em parte da decoração, reforçando que a folia pode e deve ser consciente.</p>
    `,
    image: 'me-beija-2024-folioes-sim-02.png',
    author: 'Eventos Beija-Flor',
    readTime: '4 min',
    tags: ['Carnaval', 'Festa', 'Bloco']
  },
  {
    id: 'acao-social-distrito',
    title: 'Instituto realiza grande Ação Social no Distrito Industrial',
    date: '12 de Outubro, 2024',
    category: 'Solidariedade',
    excerpt: 'O projeto levou atividades recreativas, presentes e apoio para dezenas de crianças carentes da região.',
    content: `
      <p>O Dia das Crianças no Distrito Industrial ganhou um brilho diferente com a presença do Instituto Beija-Flor. Realizamos uma tarde repleta de brincadeiras, lanches e muita solidariedade.</p>
      <h3>Impacto Direto</h3>
      <p>Mais do que entrega de brinquedos, nossa ação focou no acolhimento. Levamos oficinas de pintura, contação de histórias e momentos de lazer que muitas daquelas crianças não têm acesso no dia a dia.</p>
      <p>Agradecemos a todos os voluntários e doadores que tornaram este dia possível. Ver o sorriso no rosto de cada criança reafirma nosso compromisso social com as comunidades mais vulneráveis de Roraima.</p>
    `,
    image: 'acao-social-2024-02.png',
    author: 'Ação Social',
    readTime: '5 min',
    tags: ['Solidariedade', 'Social', 'Crianças']
  },
  {
    id: 'agua-fonte-da-vida',
    title: 'Ao som de "Água Fonte da Vida", Junina Beija-Flor alerta para preservação',
    date: '20 de Junho, 2024',
    category: 'Meio Ambiente',
    excerpt: 'O espetáculo trouxe uma mensagem crucial. A quadrilha enfatizou a vital importância da preservação ambiental.',
    content: `
      <p>Preservar a vida é preservar nossas águas. Em 2024, a Beija-Flor levou para a arena o tema "Água Fonte da Vida", um manifesto poético e visual sobre a urgência de cuidarmos dos nossos rios.</p>
      <h3>Cenografia e Conscientização</h3>
      <p>Utilizamos elementos que remetiam aos nossos rios Branco e Uraricoera. A coreografia simulava o fluxo das águas e a vida que floresce em suas margens. Foi um espetáculo de grande impacto visual que gerou reflexão em todos os presentes.</p>
      <p>Este tema foi escolhido para alinhar nossa arte com os desafios globais de sustentabilidade, mostrando que a cultura popular é uma poderosa ferramenta de educação ambiental.</p>
    `,
    image: 'beija-flor-junina-apresentacao-2024-sim-01.png',
    author: 'Educativo Beija-Flor',
    readTime: '5 min',
    tags: ['Sustentabilidade', 'Natureza', 'Mensagem']
  },
  {
    id: 'campeonato-futsal-vila-jardim',
    title: 'Campeonato de Futsal movimenta o Residencial Vila Jardim',
    date: '20 de Novembro, 2024',
    category: 'Esporte',
    excerpt: 'O torneio atendeu diversas equipes comunitárias nas categorias adultos e infantil, promovendo a cidadania.',
    content: `
      <p>O esporte é, sem dúvida, um dos maiores agentes de transformação social. No Residencial Vila Jardim, o Instituto Beija-Flor organizou um torneio de futsal que uniu a comunidade em torno da saúde e do lazer.</p>
      <h3>Cidadania em Campo</h3>
      <p>O campeonato contou com mais de 10 equipes, divididas entre categorias de base e adulto. Além das medalhas e troféus, o evento focou no espírito esportivo e no respeito mútuo.</p>
      <p>Eventos como este são fundamentais para ocupar positivamente o tempo dos jovens e fortalecer os laços entre os moradores, promovendo uma vizinhança mais unida e segura.</p>
    `,
    image: 'campeonato-02.png',
    author: 'Esporte Beija-Flor',
    readTime: '4 min',
    tags: ['Futsal', 'Esporte', 'Comunidade']
  }
];
