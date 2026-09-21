import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface NavOverlayProps {
  open: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { label: "Início", to: "/", type: "link" as const },
  { label: "Fotos", to: "/fotos", type: "link" as const },
  { label: "Inspirações", to: "/inspiracoes", type: "link" as const },
  { label: "Sobre", to: "/sobre", type: "link" as const },
];

function NavPillLink({
  children,
  onClick,
  href,
  to,
  type,
  onClose,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  type: "link" | "external";
  onClose: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const pillStyle: React.CSSProperties = {
    color: hovered ? "var(--hero-dark)" : "var(--hero-light)",
    boxShadow: hovered
      ? "inset 0 0 0 60px var(--hero-light)"
      : "inset 0 0 0 2px var(--hero-light)",
    fontFamily: "'Host Grotesk', sans-serif",
    backgroundColor: "transparent",
    border: "none",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.3s ease",
  };

  const className =
    "rounded-full uppercase tracking-[2px] text-[14px] md:text-[16px] px-[40px] py-[18px] md:px-[52px] md:py-[22px] leading-[120%] font-medium cursor-pointer";

  if (type === "external") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className={className}
        style={pillStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to || "/"}
      onClick={onClose}
      className={className}
      style={pillStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

export function NavOverlay({ open, onClose }: NavOverlayProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previousFocus.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ backgroundColor: "var(--hero-dark)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navegação do site"
          >
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Fechar menu"
              className="absolute top-8 right-8 text-sm uppercase tracking-[2px] hover:opacity-60 transition-opacity"
              style={{ color: "var(--hero-light)", fontFamily: "'Host Grotesk', sans-serif" }}
            >
              Fechar
            </button>

            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                >
                  <NavPillLink
                    type={link.type}
                    to={link.to}
                    href={link.to}
                    onClose={onClose}
                  >
                    {link.label}
                  </NavPillLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
