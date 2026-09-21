import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { FotoComSessao } from "@/lib/sessoes";

function PhotoColumn({ fotos, atraso }: { fotos: FotoComSessao[]; atraso: number }) {
  return (
    <div className="flex w-full flex-col gap-10 px-5 md:w-1/2 lg:w-1/3">
      {fotos.map((foto, index) => (
        <motion.div key={foto.arquivo} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, delay: index % 2 === 0 ? atraso : atraso + 0.1 }}>
          <Link to={`/fotos/${foto.sessaoSlug}?foto=${encodeURIComponent(foto.arquivo.split("/").pop() ?? "")}`} className="group block">
            <img src={foto.arquivo} alt={`${foto.titulo}, sessão ${foto.sessaoNome}`} width={1280} height={1600} loading="lazy" className="w-full max-w-[415px] object-cover transition-opacity duration-300 group-hover:opacity-90" />
            <span className="mt-3 block text-xs uppercase tracking-[1px] text-muted-foreground">{foto.sessaoNome}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export function PhotoGrid({ fotos }: { fotos: FotoComSessao[] }) {
  const colunas = [fotos.filter((_, i) => i % 3 === 0), fotos.filter((_, i) => i % 3 === 1), fotos.filter((_, i) => i % 3 === 2)];
  return (
    <section className="relative mx-auto my-[4vw] flex w-full max-w-[1365px] flex-col items-center" aria-label="Seleção de sessões">
      <div className="flex w-full max-w-full flex-col md:flex-row">
        {colunas.map((coluna, index) => <PhotoColumn key={index} fotos={coluna} atraso={index === 1 ? 0.3 : 0.2} />)}
      </div>
    </section>
  );
}