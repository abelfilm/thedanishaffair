import Link from 'next/link'
export default function SomePage() {
  return (
    <div className="bg-[#f5f3ee] text-black min-h-screen">
      
      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">

   <iframe
src="https://player.vimeo.com/video/130338745?background=1"
  className="absolute top-0 left-0 w-full h-full object-cover scale-[1.4]"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
/>

        <div className="absolute inset-0 bg-black/25" />

<div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 text-white">

  <Link
    href="/"
    className="uppercase tracking-[0.25em] text-sm opacity-80 hover:opacity-100 transition absolute top-8 left-8 md:top-16 md:left-16"
  >
    THE DANISH AFFAIR
  </Link>

  <div>
       <p className="uppercase tracking-[0.45em] text-xs text-white/60 mb-6">
  Commercial Direction
</p> 

          <h1 className="text-5xl md:text-8xl leading-[0.95] font-light tracking-tight mb-8">
            Lifestyle Beauty
            <br />
            Impact
          </h1>

          <p className="text-lg md:text-2xl max-w-2xl text-white/80 leading-relaxed font-light">
            Cinematic direction for lifestyle, beauty and commercial productions
            with a calm and visually driven approach.
          </p>
<p className="mt-8 text-sm uppercase tracking-[0.25em] text-white/50">
  Directed by Michael Abel
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
              Thoughtful commercial direction with international experience and a human approach.
            </p>

            <p className="text-lg leading-relaxed text-black/70 max-w-2xl">
              Direction focused on atmosphere, emotion and cinematic storytelling across lifestyle, beauty and commercial work.
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
        src="https://player.vimeo.com/video/303247418?background=1"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />

    </div>

    {/* TWO COLUMN */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* CARLSBERG */}
      <div className="rounded-[32px] overflow-hidden relative pt-[56.25%] bg-black shadow-2xl">

        <iframe
          src="https://player.vimeo.com/video/47237033?background=1"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />

      </div>

      {/* BEAUVAIS */}
      <div className="rounded-[32px] overflow-hidden relative pt-[56.25%] bg-black shadow-2xl">

        <iframe
src="https://player.vimeo.com/video/165347715?background=1"
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