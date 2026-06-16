import andreaSzulcImg from '@/assets/imgs/consultores/andrea-szulc.jpg'
import placeholderImg from '@/assets/imgs/consultores/icone-placeholder.png'
import lucianaGageiroImg from '@/assets/imgs/consultores/luciana-gageiro.jpg'
import conceicaoSeixasImg from '@/assets/imgs/consultores/conceicao-seixas.jpg'
import heloisaBezerraImg from '@/assets/imgs/consultores/heloisa-bezerra.jpg'
import julianaLaraImg from '@/assets/imgs/consultores/juliana-lara.jpg'
import valeriaLlobetImg from '@/assets/imgs/consultores/valeria-llobet.jpg'

export interface ConsultantLink {
  label: string
  href: string
}

export interface Consultant {
  id: string
  name: string
  image: string
  roles: string[]
  links?: ConsultantLink[]
}

export const consultoresContent = {
  title: 'Consultores',
  subtitle:
    'Consultoria científica vinculada ao NIAJ/UFRJ e redes de pesquisa nacional e internacional.',
  consultants: [
    {
      id: 'andrea-szulc',
      name: 'Andrea Szulc',
      image: andreaSzulcImg,
      roles: [
        'Doutora em Antropologia pela Universidade de Buenos Aires',
        'Pesquisadora do CONICET/Argentina',
        'Professora da Universidad de Buenos Aires',
      ],
    },
    {
      id: 'felipe-grisolia',
      name: 'Felipe Salvador Grisolia',
      image: placeholderImg,
      roles: [
        'Doutor em Psicologia pela Universidade Federal do Rio de Janeiro',
        'Professor Substituto da Universidade do Estado do Rio de Janeiro',
      ],
    },
    {
      id: 'idilva-germano',
      name: 'Idilva Maria Pires Germano',
      image: placeholderImg,
      roles: [
        'Doutora em Sociologia pela Universidade Federal do Ceará',
        'Professora Titular da Universidade Federal do Ceará',
      ],
    },
    {
      id: 'luciana-gageiro',
      name: 'Luciana Gageiro Coutinho',
      image: lucianaGageiroImg,
      roles: [
        'Doutora em Psicologia (PUC-Rio)',
        'Professora Associada da Faculdade de Educação da UFF/ PPG em Psicologia da UFF',
      ],
    },
    {
      id: 'conceicao-seixas',
      name: 'Conceição Firmina Seixas Silva',
      image: conceicaoSeixasImg,
      roles: [
        'Professora Associada da Faculdade de Educação da Universidade do Estado do Rio de Janeiro (UERJ)/ Departamento de Estudos da Infância (DEDI)',
        'Professora permanente do Programa de Pós-Graduação em Educação (ProEd/ UERJ)',
        'Líder do grupo Espaço de Estudo e Pesquisa sobre Infância (EEPI)',
      ],
    },
    {
      id: 'heloisa-bezerra',
      name: 'Heloisa Dias Bezerra',
      image: heloisaBezerraImg,
      roles: [
        'Professora Titular na Faculdade de Ciências Sociais da Universidade Federal do Estado do Rio de Janeiro (Unirio)',
      ],
    },
    {
      id: 'juliana-lara',
      name: 'Juliana Siqueira de Lara',
      image: julianaLaraImg,
      roles: [
        'Pós-doutoranda em Psicologia no Instituto de Psicologia da Universidade Federal do Rio de Janeiro (UFRJ)',
        'Professora substituta da Faculdade de Educação da Universidade Federal do Rio de Janeiro (UFRJ)',
      ],
    },
    {
      id: 'valeria-llobet',
      name: 'Valeria Llobet',
      image: valeriaLlobetImg,
      roles: [
        'Diretora do Centro de Estudos sobre Desigualdades, Sujeitos e Instituições (CEDESI) da Escola de Humanidades da Universidad Nacional de San Martín (UNSAM)',
        'Professora Associada da Universidad Nacional de San Martín (UNSAM)',
        'Pesquisadora do Conselho Nacional de Pesquisas Científicas e Técnicas (CONICET) no Laboratório de Pesquisa em Ciências Humanas (LICH)',
      ],
    },
  ] satisfies Consultant[],
}
