const wixBase = 'https://static.wixstatic.com/media'

function wixImage(fileId: string, ext: string, width = 1200) {
  const file = `${fileId}~mv2.${ext}`
  return `${wixBase}/${file}/v1/fit/w_${width},al_c,q_85,usm_0.66_1.00_0.01/${file}`
}

export interface ProfessoresFalamSection {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  color: 'amber' | 'red' | 'orange'
}

export const professoresFalamContent = {
  title: 'As professoras e os professores falam',
  heading: 'AS PROFESSORAS E OS PROFESSORES FALAM',
  subtitle: 'Quando questionados sobre o recreio, o que os professores têm a falar?',
  heroImage: wixImage('92a7cc_a2ba7578408d4f7f9273cd76764c65f7', 'jpg', 1600),
  heroImageAlt: 'Reportagem sobre o que professoras e professores falam sobre o recreio',
  sections: [
    {
      id: 'realidade-dos-professores',
      title: 'Realidade dos professores:',
      description:
        'Em um sistema estruturalmente deficiente, os professores denunciam um esvaziamento do sentido pedagógico da escola, que se corrompe por conta de tantos desvios de função e sobrecargas. A respeito disso, dizem:',
      image: wixImage('92a7cc_3b1426146ee641c1a7e08b75c8a4ea06', 'png'),
      imageAlt: 'Infográfico — Realidade dos professores',
      color: 'amber',
    },
    {
      id: 'tipo-de-recreio',
      title: 'De que tipo de recreio estamos falando?',
      description:
        'Questionados sobre o debate do recreio, essa pergunta sempre vem à tona. Como se define o recreio? Qual o seu valor formativo?',
      image: wixImage('92a7cc_5b36b45b682f43a2b42ff579c941fa94', 'png'),
      imageAlt: 'Infográfico — De que tipo de recreio estamos falando?',
      color: 'red',
    },
    {
      id: 'regularidade-do-recreio',
      title: 'É possível pensar em uma regularidade do recreio?',
      description:
        'Diversas vezes, é constatado pelos professores a condicionalidade do recreio como estratégia de sobrevivência à realidade do ensino público. Em uma gangorra de direitos, deveres e valores meritocráticos, o recreio é reconhecido como um jogo de forças, interesses e perspectivas.',
      image: wixImage('92a7cc_10f6312693be45b19b581e5bfcaeb5fc', 'png'),
      imageAlt: 'Infográfico — É possível pensar em uma regularidade do recreio?',
      color: 'orange',
    },
  ] satisfies ProfessoresFalamSection[],
}
