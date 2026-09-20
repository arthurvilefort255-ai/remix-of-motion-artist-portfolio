import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/ui/site-header";
import { buscarSessao } from "@/lib/sessoes";

export default function Sessao() {
  const { sessao: slug } = useParams<{ sessao: string }>();
  const sessao = buscarSessao(slug);
  const [fotoAtiva, setFotoAtiva] = useState<number | null>(null);

  useEffect(() => {
    if (fotoAtiva === null || !sessao) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFotoAtiva(null);
      if (event.key === "ArrowRight") setFotoAtiva((fotoAtiva + 1) % sessao.fotos.length);
      if (event.key === "ArrowLeft") setFotoAtiva((fotoAtiva - 1 + sessao.fotos.length) % sessao.fotos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [fotoAtiva, sessao]);

  if (!sessao) {
    return <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center"><SiteHeader /><div><h1 className="mb-4 text-3xl">Sessão não encontrada</h1><Link className="underline" to="/fotos">Ver todas as sessões</Link></div></main>;
  }

  const ativa = fotoAtiva === null ? null : sessao.fotos[fotoAtiva];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-[1365px] px-6 pb-20 pt-32 md:px-10 md:pt-40">
        <Link to="/fotos" className="mb-7 inline-block text-xs uppercase tracking-[2px] text-muted-foreground hover:text-foreground">Todas as sessões</Link>
        <header className="mb-14 grid gap-5 md:mb-20 md:grid-cols-[1fr_1fr] md:items-end">
          <h1 className="text-5xl font-medium leading-none md:text-7xl">{sessao.nome}</h1>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:justify-self-end">{sessao.descricao}</p>
        </header>
        <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {sessao.fotos.map((foto, index) => (
            <motion.button key={foto.arquivo} type="button" onClick={() => setFotoAtiva(index)} className="group block w-full overflow-hidden bg-foreground text-left text-background" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} aria-label={`Ampliar ${foto.titulo}`}>
              <span className="block aspect-[4/3] overflow-hidden">
                <img src={foto.arquivo} alt={`${foto.titulo}: ${foto.legenda}`} width={1280} height={1600} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-90" />
              </span>
              <span className="block min-h-16 px-4 py-3">
                <span className="block text-sm font-medium">{foto.titulo}</span>
                <span className="block text-xs opacity-70">{foto.legenda}</span>
              </span>
            </motion.button>
          ))}
        </div>
      </section>
      <AnimatePresence>
        {ativa && fotoAtiva !== null && (
          <motion.div className="fixed inset-0 z-[10000] flex items-center justify-center bg-foreground/95 p-4 md:p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={ativa.titulo}>
            <button onClick={() => setFotoAtiva(null)} className="absolute right-5 top-5 text-background hover:opacity-60" aria-label="Fechar foto"><X /></button>
            <button onClick={() => setFotoAtiva((fotoAtiva - 1 + sessao.fotos.length) % sessao.fotos.length)} className="absolute left-3 text-background hover:opacity-60 md:left-8" aria-label="Foto anterior"><ChevronLeft size={32} /></button>
            <figure className="flex max-h-full max-w-5xl flex-col items-center">
              <img src={ativa.arquivo} alt={`${ativa.titulo}: ${ativa.legenda}`} width={1280} height={1600} className="max-h-[80vh] max-w-full object-contain" />
              <figcaption className="mt-4 text-center text-sm text-background"><strong>{ativa.titulo}</strong><span className="ml-2 opacity-70">{ativa.legenda}</span></figcaption>
            </figure>
            <button onClick={() => setFotoAtiva((fotoAtiva + 1) % sessao.fotos.length)} className="absolute right-3 text-background hover:opacity-60 md:right-8" aria-label="Próxima foto"><ChevronRight size={32} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}