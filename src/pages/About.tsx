import { motion } from "framer-motion";
import { SiteHeader } from "@/components/ui/site-header";
import { sessoes } from "@/lib/sessoes";

const About = () => {
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
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={sessoes[0].capa}
              alt="Fotografia da sessão Londres por Arthur Vilefort"
              width={1280}
              height={1600}
              loading="lazy"
              className="w-full object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </motion.div>

          {/* Right: Bio */}
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
                Portfólio de sessões de fotos.
              </p>
              <p>
                Este espaço reúne ensaios construídos a partir da luz, da arquitetura, da paisagem e dos pequenos acontecimentos encontrados pelo caminho.
              </p>
              <p>
                Cada sessão procura preservar a atmosfera do lugar e a espontaneidade de cada instante.
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
