import { motion } from "framer-motion";
import { SiteHeader } from "@/components/ui/site-header";

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
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800"
              alt="Artist studio"
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
              About the Artist
            </h1>

            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ maxWidth: 460 }}>
              <p>
                Working primarily in oil and acrylic on canvas, I explore the intersection of colour, texture and emotional landscape. Each piece begins as an intuitive response to light and space, evolving through layers of material and gesture.
              </p>
              <p>
                My practice is rooted in the belief that abstract painting can communicate what language cannot — the felt experience of a place, a moment, a shift in atmosphere. I work across various scales, from intimate studies to large immersive canvases.
              </p>
              <p>
                Studio based in London. Works available in sizes ranging from 70 × 100 cm to 180 × 200 cm, with custom commissions considered on request.
              </p>
            </div>

            <div className="mt-10 text-sm" style={{ color: "var(--hero-paragraphs)" }}>
              <p className="mb-1">For inquiries and commissions:</p>
              <a
                href="mailto:hello@artist-studio.com"
                className="underline hover:opacity-70 transition-opacity"
                style={{ color: "var(--hero-dark)" }}
              >
                hello@artist-studio.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
