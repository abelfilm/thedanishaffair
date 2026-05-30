import Link from 'next/link'

export default function SomePage() {
  return (
    <div className="bg-[#f5f3ee] text-black min-h-screen">

      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">

 <iframe
  src="https://player.vimeo.com/video/451860262?background=1"
  className="absolute top-0 left-0 w-full h-full object-cover scale-[1.4]"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
/>

        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-16 text-white">

          <Link
            href="/"
            className="uppercase tracking-[0.25em] text-sm opacity-80 hover:opacity-100 transition"
          >
            THE DANISH AFFAIR
          </Link>

          <div>

        <p className="uppercase tracking-[0.45em] text-xs text-white/60 mb-6">
  SoMe
</p>

            <h1 className="text-5xl md:text-8xl leading-[0.95] font-light tracking-tight mb-8">
              Brand Storytelling
              <br />
              Content
            </h1>

            <p className="text-lg md:text-2xl max-w-2xl text-white/80 leading-relaxed font-light">
              Social-first content with cinematic quality, created for brands,
              businesses and people with something meaningful to say.
            </p>
<p className="mt-8 text-sm uppercase tracking-[0.25em] text-white/50">
  Directed by Michael Abel
</p>
          </div>
<div className="absolute bottom-4 right-4 z-20">
  <p className="uppercase tracking-[0.2em] text-[10px] text-white/60">
    WIDEX OPERA
  </p>
</div>
        </div>

      </section>

      {/* INTRO */}
      <section className="px-8 md:px-16 py-28">

        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <p className="uppercase tracking-[0.3em] text-sm opacity-40">
              Approach
            </p>
          </div>

          <div>

            <p className="text-3xl md:text-5xl leading-tight font-light mb-10">
              Thoughtful content made to feel human, cinematic and alive.
            </p>

            <p className="text-lg leading-relaxed text-black/70 max-w-2xl">
              From short-form social media films to ongoing branded content,
              we create visual storytelling with a calm and cinematic approach.
            </p>

          </div>

        </div>

      </section>

{/* GALLERY */}
<section className="px-8 md:px-16 pb-28">

  <div className="space-y-12">

    {/* FEATURE FILM */}
    <div className="rounded-[32px] overflow-hidden relative pt-[56.25%] bg-black shadow-2xl">

      <iframe
        src="https://player.vimeo.com/video/911507080?h=ea46b7dc05&background=1"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />

    </div>

    {/* TWO COLUMN */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* WIDEX RESTAURANT */}
      <div className="rounded-[32px] overflow-hidden relative pt-[56.25%] bg-black shadow-2xl">

        <iframe
          src="https://player.vimeo.com/video/451864677?h=c3495be6b6&background=1"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />

      </div>

      {/* MCDONALDS */}
      <div className="rounded-[32px] overflow-hidden relative pt-[56.25%] bg-black shadow-2xl">

        <iframe
          src="https://player.vimeo.com/video/389260366?background=1"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />

      </div>

    </div>

  </div>

</section>

    </div>
  );
}