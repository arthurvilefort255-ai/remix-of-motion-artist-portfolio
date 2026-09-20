import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/ui/site-header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("Erro 404: rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundColor: "var(--hero-light)",
        fontFamily: "'Host Grotesk', sans-serif",
        color: "var(--hero-paragraphs)",
      }}
    >
      <SiteHeader />
      <div className="text-center">
        <p
          className="text-xs uppercase tracking-[3px] mb-6"
          style={{ color: "var(--hero-paragraphs)", opacity: 0.6 }}
        >
          404
        </p>
        <h1
          className="text-4xl md:text-5xl mb-6"
          style={{
            fontFamily: "'Host Grotesk', sans-serif",
            color: "var(--hero-dark)",
            lineHeight: 1.15,
          }}
        >
          Página não encontrada
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--hero-paragraphs)" }}>
          A página que você procura não existe.
        </p>
        <Link
          to="/"
          className="inline-block underline text-sm hover:opacity-70 transition-opacity"
          style={{ color: "var(--hero-dark)" }}
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
