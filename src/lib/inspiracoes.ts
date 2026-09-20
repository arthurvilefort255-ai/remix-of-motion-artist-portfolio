export interface ObraFamosa {
  titulo: string;
  ano?: string;
  legenda: string;
  link?: string;
  imagem?: string;
}

export interface Inspiracao {
  slug: string;
  nome: string;
  retratoAlt: string;
  retrato?: string;
  biografia: string[];
  obras: ObraFamosa[];
}

export const inspiracoes: Inspiracao[] = [
  {
    slug: "henri-cartier-bresson",
    nome: "Henri Cartier-Bresson",
    retratoAlt: "Henri Cartier-Bresson segurando uma câmera fotográfica",
    retrato: `${import.meta.env.BASE_URL}inspiracoes/henri-cartier-bresson-retrato.png`,
    biografia: [
      "Henri Cartier-Bresson (1908–2004) foi um fotógrafo francês e uma das figuras centrais da fotografia documental do século XX. Em 1947, foi um dos fundadores da agência Magnum Photos.",
      "Seu trabalho ficou associado ao conceito de “momento decisivo”: a atenção ao instante em que forma, gesto e significado se encontram. A ideia ganhou projeção com o livro Images à la sauvette, publicado em 1952.",
    ],
    obras: [
      { titulo: "The Europeans, Paris", legenda: "Uma cena da vida cotidiana registrada em Paris.", link: "https://www.magnumphotos.com/photographer/henri-cartier-bresson/", imagem: `${import.meta.env.BASE_URL}inspiracoes/the-europeans-paris.png` },
      { titulo: "Rue Mouffetard, Paris", legenda: "Uma cena espontânea da vida cotidiana em Paris.", link: "https://www.magnumphotos.com/photographer/henri-cartier-bresson/", imagem: `${import.meta.env.BASE_URL}inspiracoes/rue-mouffetard-paris.png` },
      { titulo: "Place de l'Europe, Gare Saint Lazare, Paris", legenda: "Movimento, reflexo e geometria reunidos em um instante decisivo.", link: "https://www.magnumphotos.com/photographer/henri-cartier-bresson/", imagem: `${import.meta.env.BASE_URL}inspiracoes/place-de-leurope-gare-saint-lazare-paris.png` },
    ],
  },
  {
    slug: "araquem-de-alcantara",
    nome: "Araquém de Alcântara",
    retratoAlt: "Araquém de Alcântara fotografando com uma câmera",
    retrato: `${import.meta.env.BASE_URL}inspiracoes/araquem-de-alcantara-retrato.png`,
    biografia: [
      "Araquém de Alcântara é um fotógrafo brasileiro reconhecido por uma trajetória dedicada à natureza e aos povos do Brasil. Seu olhar percorre paisagens, animais, comunidades e modos de vida em diferentes regiões do país.",
      "Sua fotografia combina documentação e compromisso com a preservação, aproximando o público da diversidade natural e cultural brasileira.",
    ],
    obras: [
      { titulo: "Onça", legenda: "Onça atravessando as águas, em um registro da fauna brasileira.", imagem: `${import.meta.env.BASE_URL}inspiracoes/araquem-onca.png` },
      { titulo: "Gente", legenda: "Um olhar documental sobre os povos e modos de vida do Brasil.", imagem: `${import.meta.env.BASE_URL}inspiracoes/araquem-gente.png` },
      { titulo: "Amazônia", legenda: "A escala da floresta e a relação humana com a natureza amazônica.", imagem: `${import.meta.env.BASE_URL}inspiracoes/araquem-amazonia.png` },
    ],
  },
];