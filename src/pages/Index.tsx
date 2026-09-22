import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { HeroSection } from "@/components/ui/hero-section";
import { PhotoGrid } from "@/components/ui/photo-grid";
import { SiteHeader } from "@/components/ui/site-header";
import { sessoes, type FotoComSessao } from "@/lib/sessoes";

function selecionarFotos(): FotoComSessao[] {
  const porSessao = sessoes.map((sessao) =>
    sessao.fotos
      .map((foto) => ({ ...foto, sessaoSlug: sessao.slug, sessaoNome: sessao.nome }))
      .sort(() => Math.random() - 0.5),
  );
  return Array.from({ length: 10 }, (_, rodada) =>
    porSessao.map((fotos) => fotos[rodada]),
  ).flat();
}

const Index = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { margin: "100% 0px 100% 0px" });
  const [fotos] = useState(selecionarFotos);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Host Grotesk', sans-serif",
        fontSize: 18,
        lineHeight: "170%",
        letterSpacing: "0.35px",
      }}
    >
      <SiteHeader />
      <HeroSection gridInView={gridInView} fotos={fotos.slice(0, 12)} />
      <div ref={gridRef}>
        <PhotoGrid fotos={fotos.slice(12)} />
      </div>
    </div>
  );
};

export default Index;
