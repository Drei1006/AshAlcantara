import { useEffect, useState } from "react";
import heroPortrait from "@/assets/hero-portrait.png";
import portrait from "@/assets/portrait.png";
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";
import dlsl1 from "@/assets/dlsl-1.png";
import dlsl2 from "@/assets/dlsl-2.png";
import dlsl3 from "@/assets/dlsl-3.png";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";

type Work = { src: string; title: string; meta: string };
type Collection = { id: string; eyebrow: string; title: string; items: Work[] };

const collections: Collection[] = [
  {
    id: "lavoxa",
    eyebrow: "As Layout Artist at",
    title: "LAVOXA Group of Publications",
    items: [
      { src: work1, title: "",            meta: "" },
      { src: work2, title: "", meta: "" },
      { src: work3, title: "", meta: "" },
      { src: work4, title: "",     meta: "" },
      { src: work5, title: "",   meta: "" },
      { src: work6, title: "",                 meta: "" },
    ],
  },
  {
    id: "dlsl",
    eyebrow: "As Secretary of Publications",
    title: "DLSL Student Government",
    items: [
      { src: dlsl1, title: "",     meta: "" },
      { src: dlsl2, title: "",    meta: "" },
      { src: dlsl3, title: "", meta: "" },
    ],
  },
  {
    id: "photography",
    eyebrow: "Through the lens",
    title: "Photography",
    items: [
      { src: photo1, title: "",  meta: "" },
      { src: photo2, title: "",       meta: "" },
      { src: photo3, title: "",     meta: "" },
      { src: photo4, title: "",        meta: "" },
    ],
  },
  {
    id: "graphics-design",
    eyebrow: "XCoffee",
    title: "Graphics Design",
    // Placeholder images for now. Replace `work1..work4` with your graphic design assets.
    items: [
      { src: xc1, title: "", meta: "" },
      { src: xc2, title: "", meta: "" },
      { src: xc3, title: "", meta: "" },
      { src: xc4, title: "", meta: "" },
      { src: xc5, title: "", meta: "" },
      { src: xc6, title: "", meta: "" },
    ],
  },
];

const Portfolio = () => {
  const [open, setOpen] = useState<Work | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 bg-background/70 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-6 flex items-center justify-between">
          <a href="#top" className="font-serif italic text-base">Ash Alcantara</a>
          <nav className="hidden sm:flex gap-10 text-xs uppercase tracking-widest-xl text-muted-foreground">
            <a href="#work"    className="hover:text-foreground transition-colors">Work</a>
            <a href="#about"   className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="min-h-screen px-6 md:px-12 pt-32 pb-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center min-h-[calc(100vh-10rem)]">
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="fade-up delay-1 text-xs uppercase tracking-widest-xl text-muted-foreground mb-8">
              Portfolio — MMXXVI
            </p>
            <h1 className="fade-up delay-2 font-serif font-light leading-[0.95] text-[14vw] md:text-[9vw] lg:text-[8rem]">
              Hoewell <em className="italic font-light">Ashley</em>
              <br />
              Alcantara.
            </h1>
            <p className="fade-up delay-3 mt-10 max-w-md text-sm md:text-base text-muted-foreground">
              Multimedia Artist &amp; Visual Designer based in the Philippines.
            </p>
            <a href="#work" className="fade-in delay-4 group mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-widest-xl">
              <span>View Work</span>
              <span className="block h-px w-12 bg-foreground transition-all duration-500 group-hover:w-20" />
            </a>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 fade-up delay-2">
            <div className="overflow-hidden bg-muted">
              <img
                src={heroPortrait}
                alt="Hoewell Ashley Alcantara"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-6 md:px-12 py-32 mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between mb-24">
          <h2 className="font-serif italic text-3xl md:text-4xl">Selected Work</h2>
          <span className="text-xs uppercase tracking-widest-xl text-muted-foreground">
            {String(collections.length).padStart(2, "0")} collections
          </span>
        </div>

        <div className="space-y-32 md:space-y-40">
          {collections.map((c) => (
            <div key={c.id} id={c.id}>
              <div className="mb-16 md:mb-20 max-w-2xl">
                <p className="text-[10px] uppercase tracking-widest-xl text-muted-foreground mb-4">
                  {c.eyebrow}
                </p>
                <h3 className="font-serif text-3xl md:text-5xl leading-tight">{c.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-20">
                {c.items.map((w, i) => (
                  <figure
                    key={w.title}
                    onClick={() => setOpen(w)}
                    className={`group cursor-pointer ${i % 2 === 1 ? "md:mt-24" : ""}`}
                  >
                    <div className="overflow-hidden bg-muted">
                      <img
                        src={w.src}
                        alt={w.title}
                        loading="lazy"
                        className="w-full aspect-square object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="mt-5 flex items-baseline justify-between transition-opacity group-hover:opacity-60">
                      <span className="font-serif italic text-lg">{w.title}</span>
                      <span className="text-[10px] uppercase tracking-widest-xl text-muted-foreground text-right">{w.meta}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-12 py-32 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="overflow-hidden bg-muted max-w-sm">
              <img src={portrait} alt="Portrait of Ashley" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="text-xs uppercase tracking-widest-xl text-muted-foreground mb-8">About</p>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              I'm a Multimedia Artist by heart. I started doing graphic design and
              video editing as a <em className="italic">hobby</em> — and now am pursuing it as a profession.
            </p>
            <p className="mt-8 max-w-md text-sm text-muted-foreground leading-relaxed">
              Three years as a layout artist with LAVOXA Group of Publications &amp; the De La Salle Lipa
              Student Government. Bachelor of Multimedia Arts, 2024.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-12 py-32 mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-widest-xl text-muted-foreground mb-10">Contact</p>
        <h2 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl">
          Let's make something <em className="italic">quiet</em> &amp; intentional.
        </h2>
        <a
          href="mailto:ashalcntra@gmail.com"
          className="group mt-12 inline-block font-serif italic text-2xl md:text-3xl border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
        >
          ashalcntra@gmail.com
        </a>
        <div className="mt-16 flex gap-10 text-xs uppercase tracking-widest-xl">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Behance</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-10 mx-auto max-w-7xl border-t border-border/60">
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest-xl text-muted-foreground">
          <span>© 2026 Hoewell Ashley Alcantara</span>
          <span>Lipa — Philippines</span>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6 md:p-16 fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 text-xs uppercase tracking-widest-xl"
            aria-label="Close"
          >
            Close
          </button>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={open.title} className="w-full max-h-[80vh] object-contain" />
            <figcaption className="mt-6 flex items-baseline justify-between">
              <span className="font-serif italic text-xl">{open.title}</span>
              <span className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">{open.meta}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
};

export default Portfolio;
