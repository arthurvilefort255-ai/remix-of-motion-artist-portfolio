import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/ui/site-header";
import { sessoes } from "@/lib/sessoes";

export default function Fotos() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-[1365px] px-6 pb-20 pt-32 md:px-10 md:pt-40">
        <header className="mb-14 md:mb-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[2px] text-muted-foreground">Arquivo</p>
          <h1 className="text-5xl font-medium leading-none md:text-7xl">Sessões de fotos</h1>
        </header>
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {sessoes.map((sessao, index) => (
            <motion.article key={sessao.slug} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <Link to={`/fotos/${sessao.slug}`} className="group block">
                <div className="overflow-hidden bg-muted">
                  <img src={sessao.capa} alt={`Capa da sessão ${sessao.nome}`} width={1280} height={1600} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-border py-5">
                  <div>
                    <h2 className="text-2xl font-medium">{sessao.nome}</h2>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{sessao.descricao}</p>
                  </div>
                  <span className="whitespace-nowrap text-xs uppercase tracking-[1px] text-muted-foreground">{sessao.fotos.length} fotos</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}