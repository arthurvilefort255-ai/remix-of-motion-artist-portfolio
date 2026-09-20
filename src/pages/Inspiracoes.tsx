import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/ui/site-header";
import { inspiracoes } from "@/lib/inspiracoes";

export default function Inspiracoes() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <header className="mb-20"><p className="mb-3 text-xs font-medium uppercase tracking-[2px] text-muted-foreground">Referências</p><h1 className="text-5xl font-medium leading-none md:text-7xl">Inspirações</h1></header>
        <div className="space-y-28 md:space-y-36">
          {inspiracoes.map((pessoa, index) => (
            <motion.article key={pessoa.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-t border-border pt-8">
              <div className="grid gap-10 md:grid-cols-[minmax(240px,0.75fr)_1.25fr] md:gap-16">
                <div className="flex aspect-[4/5] items-center justify-center bg-muted" role="img" aria-label={pessoa.retratoAlt}><span className="max-w-[14rem] px-6 text-center text-xs uppercase tracking-[2px] text-muted-foreground">Retrato a adicionar</span></div>
                <div><p className="mb-3 text-xs text-muted-foreground">0{index + 1}</p><h2 className="mb-8 text-4xl font-medium md:text-5xl">{pessoa.nome}</h2><div className="space-y-5 text-base leading-relaxed text-muted-foreground">{pessoa.biografia.map((paragrafo) => <p key={paragrafo}>{paragrafo}</p>)}</div></div>
              </div>
              <section className="mt-16"><h3 className="mb-7 text-xl font-medium">Fotos famosas</h3><div className="grid gap-5 md:grid-cols-3">{pessoa.obras.map((obra, obraIndex) => <article key={`${obra.titulo}-${obraIndex}`}><div className="flex aspect-[4/3] items-center justify-center bg-muted" role="img" aria-label={`Espaço reservado para ${obra.titulo}`}><span className="px-4 text-center text-xs uppercase tracking-[1px] text-muted-foreground">Imagem protegida por direitos autorais</span></div><div className="border-b border-border py-4"><h4 className="font-medium">{obra.titulo}{obra.ano ? ` (${obra.ano})` : ""}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{obra.legenda}</p>{obra.link ? <a href={obra.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm underline underline-offset-4">Ver a obra <ExternalLink size={14} aria-hidden="true" /></a> : <span className="mt-4 block text-xs text-muted-foreground">Link a adicionar</span>}</div></article>)}</div></section>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}