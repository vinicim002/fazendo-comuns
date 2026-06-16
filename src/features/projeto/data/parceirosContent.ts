import logoEducacaoImg from '@/assets/imgs/parceiros/logo-educacao.png'
import cre1Img from '@/assets/imgs/parceiros/cre-1.png'
import cre2Img from '@/assets/imgs/parceiros/cre-2.png'
import cre3Img from '@/assets/imgs/parceiros/cre-3.png'

export interface PartnerLogo {
  src: string
  alt: string
}

export interface PartnerGroup {
  id: string
  title: string
  logos: PartnerLogo[]
}

export const parceirosContent = {
  title: 'Parceiros',
  subtitle:
    'Instituições parceiras que apoiam e viabilizam as pesquisas e intervenções do projeto Fazendo Comuns.',
  groups: [
    {
      id: 'sme-rio',
      title: 'Secretaria Municipal de Educação (SME) da cidade do Rio',
      logos: [
        {
          src: logoEducacaoImg,
          alt: 'Logo da Secretaria Municipal de Educação do Rio de Janeiro',
        },
      ],
    },
    {
      id: 'cres',
      title: 'CREs — Coordenadorias Regionais de Educação',
      logos: [
        { src: cre1Img, alt: 'Logo da Coordenadoria Regional de Educação 1' },
        { src: cre2Img, alt: 'Logo da Coordenadoria Regional de Educação 2' },
        { src: cre3Img, alt: 'Logo da Coordenadoria Regional de Educação 3' },
      ],
    },
  ] satisfies PartnerGroup[],
}
