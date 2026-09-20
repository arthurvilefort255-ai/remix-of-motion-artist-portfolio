## Problem

In `src/components/ui/hero-section.tsx`, the hero H1 "Parallax artist portfolio" sits inside a fixed-ratio box (`aspect-ratio: 1126/266`, `max-w-[800px]` on desktop) that is nested in a `motion.div` with `overflow-hidden` (used for the height 0 → auto reveal). The H1 uses `whitespace-nowrap` with `text-[clamp(2rem,8vw,4.5rem)]`, so at many widths the single line is wider than 800px and gets clipped horizontally by the overflow-hidden reveal wrapper.

## Fix

In the hero text block only:

1. Remove `whitespace-nowrap` from the H1 so long titles can wrap instead of being cut off, and keep it balanced with `text-balance`.
2. Replace the fixed `aspect-ratio: 1126/266` box with a natural-height container (keep the `max-w` and centering) so the title's own height drives layout instead of a locked ratio.
3. Tighten the clamp so the line fits the container width at desktop (e.g. `clamp(2rem, 6.5vw, 4.5rem)`) and set `leading-[1.05]` so a wrapped two-line title stays tight.
4. Keep the reveal animation (`height: 0 → auto`, `overflow-hidden`) untouched — it animates height, and with natural height it no longer crops the text.

No changes to copy, colors, fonts, or any other section.
