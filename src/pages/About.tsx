import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/ui/site-header";
import { Button } from "@/components/ui/button";
import fotoParque from "@/assets/sobre/arthur-parque.png.asset.json";
import fotoEstudio from "@/assets/sobre/arthur-estudio.png.asset.json";
import fotoInfanciaEscola from "@/assets/sobre/arthur-infancia-escola.png.asset.json";
import fotoInfanciaJudo from "@/assets/sobre/arthur-infancia-judo.png.asset.json";

const fotosSobre = [
  { src: fotoParque.url, alt: "Arthur Vilefort em um parque" },
  { src: fotoEstudio.url, alt: "Arthur Vilefort em um estúdio de música" },
  { src: fotoInfanciaEscola.url, alt: "Arthur Vilefort quando criança no colégio" },
  { src: fotoInfanciaJudo.url, alt: "Arthur Vilefort quando criança com seu certificado de judô" },
];

const About = () => {
  const [fotoAtual, setFotoAtual] = useState(0);

  const mostrarAnterior = () => {
    setFotoAtual((indice) => (indice - 1 + fotosSobre.length) % fotosSobre.length);
  };

  const mostrarProxima = () => {
    setFotoAtual((indice) => (indice + 1) % fotosSobre.length);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--hero-light)",
        fontFamily: "'Host Grotesk', sans-serif",
        color: "var(--hero-paragraphs)",
      }}
    >
      <SiteHeader />

      <div className="px-6 md:px-12 lg:px-20 pt-32 pb-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[3/4] overflow-hidden bg-muted"
          >
            <motion.img
              key={fotosSobre[fotoAtual].src}
              src={fotosSobre[fotoAtual].src}
              alt={fotosSobre[fotoAtual].alt}
              width={1280}
              height={1600}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="h-full w-full object-cover"
            />
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={mostrarAnterior}
              aria-label="Ver foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full shadow-md"
            >
              <ChevronLeft aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={mostrarProxima}
              aria-label="Ver próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full shadow-md"
            >
              <ChevronRight aria-hidden="true" />
            </Button>
            <p className="absolute bottom-3 right-3 bg-background/85 px-2 py-1 text-xs text-foreground" aria-live="polite">
              {fotoAtual + 1} / {fotosSobre.length}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h1
              className="text-4xl md:text-5xl mb-8"
              style={{
                fontFamily: "'Host Grotesk', sans-serif",
                color: "var(--hero-dark)",
                lineHeight: 1.15,
              }}
            >
              Arthur Vilefort
            </h1>

            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ maxWidth: 460 }}>
              <p>
                Sou um menino de 17 anos que ama Cinema, Fotografia, Musica e Jesus.
              </p>
              <p>
                Estudo no Colégio Batista Mineiro e meu sonho é ser um Diretor de Filmes sucedido.
              </p>
              <p>
                Cada foto é uma expressão da minha visão da cidade, das pessoas que me cercam e dos momentos que me marcam, não tento ser perfeito, estou tentando captar o que eu gosto de ver. espero que vocês gostem também &lt;3
              </p>
            </div>

            <p className="mt-10 text-sm" style={{ color: "var(--hero-paragraphs)" }}>Fotografia por Arthur Vilefort.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
