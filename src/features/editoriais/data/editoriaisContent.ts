export interface Editorial {
  id: string
  number: string
  title: string
  slug: string
  excerpt: string
  content: string[]
  publishedAt: string
}

export const editoriaisHubIntro = {
  title: 'Editoriais',
  subtitle:
    "Confira abaixo os últimos editoriais do projeto Fazendo Comuns",
}

export const editoriais: Editorial[] = [
  {
    id: '3',
    number: '03/2025',
    title: 'As professoras discutem o recreio',
    slug: 'as-professoras-discutem-o-recreio',
    excerpt:
      '“Você entende que é direito da criança ter professor, antes mesmo do recreio?” Deparamo-nos com esta pergunta em uma roda de conversa com professoras do ensino público municipal carioca quando discutíamos como elas viam a questão da falta de recreio nas escolas.',
    publishedAt: '2025-01-01',
    content: [
      '“Você entende que é direito da criança ter professor, antes mesmo do recreio?” Deparamo-nos com esta pergunta em uma roda de conversa com professoras do ensino público municipal carioca quando discutíamos como elas viam a questão da falta de recreio nas escolas. O impacto desse questionamento nos levou à reflexão, trazida pelo presente editorial, que discute as perspectivas das docentes acerca do recreio como pauta política das crianças.',
      'Entendemos que a participação delas no cotidiano escolar está intrinsecamente ligada às possibilidades de se efetivar o recreio das crianças nas instituições públicas de ensino. Neste sentido, a existência do recreio nas escolas, enquanto um espaço de liberdade e recreação infantil, está condicionado ao modo como as docentes compreendem a importância desse momento na experiência escolar da criança.',
      'O presente editorial deseja discutir, antes de tudo, a conjuntura de interesses e poderes que perpassa a oferta do recreio nas escolas e como esses se articulam ao exercício da docência no ensino público brasileiro. Ele se baseia no trabalho que desenvolvemos com as professoras ao longo do projeto de pesquisa Fazendo Comuns, tendo em vista que a oferta do recreio escolar depende de como as professoras compreendem sua importância na vida escolar da criança.',
    ],
  },
  {
    id: '2',
    number: '02/2024',
    title: 'As crianças são sujeitos políticos?',
    slug: 'as-criancas-sao-sujeitos-politicos',
    excerpt:
      'Fazer esta pergunta é preciso. Talvez porque a política, ainda que considerada cada vez mais com desconfiança ou desprezo, resume essencialmente os desafios invariantes da convivência coletiva: a diferença entre pessoas e a busca por igualdade.',
    publishedAt: '2024-01-01',
    content: [
      'Fazer esta pergunta é preciso. Talvez porque a política, ainda que considerada cada vez mais com desconfiança ou desprezo, resume essencialmente os desafios invariantes da convivência coletiva: a diferença entre pessoas e a busca por igualdade.',
      'Crianças e adultos são sujeitos humanos diferentes, não por força de uma natureza que essencializa a diferença entre eles, mas cujas relações expressam diferenciais culturais, sociais e econômicos no acesso ao usufruto dos bens humanos. Embora crianças compartilhem com adultos, tanto ou mais, as adversidades da miséria, das guerras, do racismo, das violências e das discriminações compete aos adultos a decisão sobre as bonanças da paz e das riquezas que asseguram sempre aos que já têm poder, o melhor quinhão.',
      'O mundo construído e decidido pelos adultos reproduz os privilégios e as narrativas que mantêm a suposta superioridade deles em relação às crianças, e essas excluídas da participação sobre os destinos mais igualitários e justos da sociedade. Assim, a discussão sobre crianças e política visa desnaturalizar a suposta incompatibilidade da criança com a política, e a repulsa de torná-la parte da comunidade política.',
    ],
  },
  {
    id: '1',
    number: '01/2024',
    title: 'Inauguração do site e o mote “Vamos falar do recreio!”',
    slug: 'editorial-01-2024',
    excerpt:
      'O projeto de pesquisa e extensão “FAZENDO COMUNS: a educação como projeto intra- e co-geracional”, vinculado ao NIAJ/UFRJ, apresenta este site como interface de comunicação e diálogo com a sociedade.',
    publishedAt: '2024-01-01',
    content: [
      'O projeto de pesquisa e extensão “FAZENDO COMUNS: a educação como projeto intra- e co-geracional”, vinculado ao Núcleo de Estudos da Infância, Adolescência e Juventude (NIAJ), da Universidade Federal do Rio de Janeiro coordenada pela Professora Lucia Rabello de Castro, apresenta este site que inauguramos oficialmente com a publicação desse primeiro Editorial, como a interface de comunicação e diálogo com a sociedade.',
      'Com ele, pretendemos trazer a público uma vertente importante deste projeto de pesquisa cujos resultados vêm acumulando um relevante conjunto de evidências sobre a demanda das crianças – estudantes de escolas públicas do município do Rio de Janeiro – sobre a importância do recreio escolar.',
      '“Vamos falar do recreio!” é o mote do site em que convidamos todas as pessoas interessadas a participarem da discussão pública sobre uma questão que atinge, basicamente, as crianças, mas que deve concernir a todos e todas, sensibilizados e atraídos pela justeza e legitimidade de pautas políticas insurgentes.',
      'Como as crianças são consideradas sujeitos pré-políticos na nossa sociedade – incapazes de se autorepresentar como cidadãos e sem gozar de seus direitos políticos plenos – parece fundamental que suas reivindicações possam ser também sustentadas por grupos que agem em sua defesa (“advocacy groups”) tais como pesquisadores da infância, profissionais de várias áreas que lidam com a infância, pais, professoras e outros.',
      'Além disso, nos parece fundamental, acompanhando a discussão trazida por Spyrou (2021), que, como pesquisadores da infância, possamos tornar nosso objeto de investigação um campo de discussão pública para que o conhecimento científico gerado tenha impacto social.',
    ],
  },
]

export function getEditorialBySlug(slug: string): Editorial | undefined {
  return editoriais.find((e) => e.slug === slug)
}
