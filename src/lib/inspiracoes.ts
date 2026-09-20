export interface ObraFamosa {
  titulo: string;
  ano?: string;
  legenda: string;
  link?: string;
}

export interface Inspiracao {
  slug: string;
  nome: string;
  retratoAlt: string;
  biografia: string[];
  obras: ObraFamosa[];
}

export const inspiracoes: Inspiracao[] = [
  {
    slug: "henri-cartier-bresson",
    nome: "Henri Cartier-Bresson",
    retratoAlt: "Espaço reservado para retrato de Henri Cartier-Bresson",
    biografia: [
      "Henri Cartier-Bresson (1908–2004) foi um fotógrafo francês e uma das figuras centrais da fotografia documental do século XX. Em 1947, foi um dos fundadores da agência Magnum Photos.",
      "Seu trabalho ficou associado ao conceito de “momento decisivo”: a atenção ao instante em que forma, gesto e significado se encontram. A ideia ganhou projeção com o livro Images à la sauvette, publicado em 1952.",
    ],
    obras: [
      { titulo: "Atrás da Gare Saint-Lazare", ano: "1932", legenda: "Um instante suspenso junto à estação parisiense.", link: "https://www.magnumphotos.com/photographer/henri-cartier-bresson/" },
      { titulo: "Hyères, França", ano: "1932", legenda: "Geometria urbana atravessada pelo movimento de um ciclista.", link: "https://www.magnumphotos.com/photographer/henri-cartier-bresson/" },
      { titulo: "Rue Mouffetard, Paris", ano: "1954", legenda: "Uma cena espontânea da vida cotidiana em Paris.", link: "https://www.magnumphotos.com/photographer/henri-cartier-bresson/" },
    ],
  },
  {
    slug: "araquem-de-alcantara",
    nome: "Araquém de Alcântara",
    retratoAlt: "Espaço reservado para retrato de Araquém de Alcântara",
    biografia: [
      "Araquém de Alcântara é um fotógrafo brasileiro reconhecido por uma trajetória dedicada à natureza e aos povos do Brasil. Seu olhar percorre paisagens, animais, comunidades e modos de vida em diferentes regiões do país.",
      "Sua fotografia combina documentação e compromisso com a preservação, aproximando o público da diversidade natural e cultural brasileira. Aqui, as obras poderão ser incluídas depois com os respectivos links oficiais.",
    ],
    obras: [
      { titulo: "Obra a definir", legenda: "Espaço reservado para uma fotografia e seu link oficial." },
      { titulo: "Obra a definir", legenda: "Espaço reservado para uma fotografia e seu link oficial." },
      { titulo: "Obra a definir", legenda: "Espaço reservado para uma fotografia e seu link oficial." },
    ],
  },
];