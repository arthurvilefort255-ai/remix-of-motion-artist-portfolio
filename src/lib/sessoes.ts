export interface FotoSessao {
  arquivo: string;
  titulo: string;
  legenda: string;
}

export interface Sessao {
  slug: string;
  nome: string;
  descricao: string;
  capa: string;
  fotos: FotoSessao[];
}

const base = import.meta.env.BASE_URL;
const foto = (sessao: string, arquivo: string) => `${base}fotos/${sessao}/${arquivo}`;

export const sessoes: Sessao[] = [
  {
    slug: "londres",
    nome: "Londres",
    descricao: "Ruas, arquitetura e instantes cotidianos sob a luz de Londres.",
    capa: foto("londres", "01.jpg"),
    fotos: [
      { arquivo: foto("londres", "01.jpg"), titulo: "Londres 01", legenda: "Entre a chuva e o movimento da cidade." },
      { arquivo: foto("londres", "02.jpg"), titulo: "Londres 02", legenda: "Uma pausa no ritmo urbano." },
      { arquivo: foto("londres", "03.jpg"), titulo: "Londres 03", legenda: "Arquitetura, distância e presença." },
      { arquivo: foto("londres", "04.jpg"), titulo: "Londres 04", legenda: "Reflexos de uma tarde cinzenta." },
      { arquivo: foto("londres", "05.jpg"), titulo: "Londres 05", legenda: "Tons discretos pelas ruas." },
      { arquivo: foto("londres", "06.jpg"), titulo: "Londres 06", legenda: "Caminhos que atravessam a cidade." },
    ],
  },
  {
    slug: "inhotim",
    nome: "Inhotim",
    descricao: "Arte, paisagem e arquitetura em diálogo com a natureza.",
    capa: foto("inhotim", "01.jpg"),
    fotos: [
      { arquivo: foto("inhotim", "01.jpg"), titulo: "Inhotim 01", legenda: "Geometrias entre o verde e a água." },
      { arquivo: foto("inhotim", "02.jpg"), titulo: "Inhotim 02", legenda: "Arte cercada pela paisagem." },
      { arquivo: foto("inhotim", "03.jpg"), titulo: "Inhotim 03", legenda: "Reflexos em silêncio." },
      { arquivo: foto("inhotim", "04.jpg"), titulo: "Inhotim 04", legenda: "Luz natural sobre formas contemporâneas." },
      { arquivo: foto("inhotim", "05.jpg"), titulo: "Inhotim 05", legenda: "O jardim como espaço de contemplação." },
      { arquivo: foto("inhotim", "06.jpg"), titulo: "Inhotim 06", legenda: "Uma arquitetura aberta ao entorno." },
    ],
  },
  {
    slug: "igreja",
    nome: "Igreja",
    descricao: "Detalhes de fé, arquitetura e a atmosfera silenciosa do espaço.",
    capa: foto("igreja", "01.jpg"),
    fotos: [
      { arquivo: foto("igreja", "01.jpg"), titulo: "Igreja 01", legenda: "A luz atravessa a nave central." },
      { arquivo: foto("igreja", "02.jpg"), titulo: "Igreja 02", legenda: "Simetria e recolhimento." },
      { arquivo: foto("igreja", "03.jpg"), titulo: "Igreja 03", legenda: "Madeira, pedra e memória." },
      { arquivo: foto("igreja", "04.jpg"), titulo: "Igreja 04", legenda: "Detalhes revelados pela luz." },
      { arquivo: foto("igreja", "05.jpg"), titulo: "Igreja 05", legenda: "O silêncio da arquitetura." },
      { arquivo: foto("igreja", "06.jpg"), titulo: "Igreja 06", legenda: "Perspectiva em direção ao altar." },
    ],
  },
];

export interface FotoComSessao extends FotoSessao {
  sessaoSlug: string;
  sessaoNome: string;
}

export const todasAsFotos: FotoComSessao[] = sessoes.flatMap((sessao) =>
  sessao.fotos.map((item) => ({ ...item, sessaoSlug: sessao.slug, sessaoNome: sessao.nome })),
);

export const buscarSessao = (slug?: string) => sessoes.find((sessao) => sessao.slug === slug);