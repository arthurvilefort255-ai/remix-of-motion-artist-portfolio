type SessionBorderArtProps = {
  session: string;
};

function LondonSketch() {
  return (
    <>
      <path d="M8 44c12-17 20-17 32 0M12 44v34m24-34v34M7 78h34M17 78V55h14v23M8 110h33l-4 20H12l-4-20Zm5 0 4-12h15l5 12M14 118h21M17 130a4 4 0 1 0 0 .1m16-.1a4 4 0 1 0 0 .1" />
      <path d="M28 177c-12 11-16 26-8 40 7 12 8 25 1 40m7-80c11 15 11 29 2 43-8 13-7 26 1 39M8 281h33M13 281l3-24h17l3 24m-18-24 2-13h9l2 13" />
    </>
  );
}

function InhotimSketch() {
  return (
    <>
      <path d="M25 25c-17 18-17 39 0 57 16-18 16-39 0-57Zm0 57v39M24 52C17 45 12 43 7 43m18 22c7-8 12-10 18-10M8 128c26 4 35 19 33 43-24 1-37-14-33-43Zm5 5c10 12 18 23 27 37" />
      <path d="M42 205c-26 2-37 17-35 42 24 1 36-14 35-42Zm-34 41 32-34M25 246v39M7 301c8-12 15-15 20-7 5-9 10-8 16 2M9 312c10 9 21 12 33 3" />
    </>
  );
}

function ChurchSketch() {
  return (
    <>
      <path d="M25 18v28m-9-18h18M8 101V79c0-17 7-28 17-34 11 6 17 17 17 34v22M14 101V78c0-10 4-18 11-23 7 5 11 13 11 23v23M7 101h36" />
      <path d="M11 135c9-12 19-12 28 0v41H11v-41Zm14-9v50m-14-28h28M8 215c11-16 23-16 34 0M12 215v50m26-50v50M7 265h36M18 265v-27c5-8 10-8 15 0v27" />
    </>
  );
}

export function SessionBorderArt({ session }: SessionBorderArtProps) {
  const Sketch = session === "londres" ? LondonSketch : session === "igreja" ? ChurchSketch : InhotimSketch;

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
      {["left-0", "right-0 scale-x-[-1]"].map((position) => (
        <div key={position} className={`absolute bottom-0 top-60 w-14 ${position}`}>
          <svg className="h-full w-full text-foreground/55" viewBox="0 0 50 340" preserveAspectRatio="xMidYMin slice" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <Sketch />
          </svg>
          <svg className="absolute left-0 top-1/2 h-full w-full -translate-y-10 text-sketch-accent/65" viewBox="0 0 50 340" preserveAspectRatio="xMidYMin slice" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <Sketch />
          </svg>
        </div>
      ))}
    </div>
  );
}