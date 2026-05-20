import Link from "next/dist/client/link";

export default function TheDanishAffairMockup() {
  const cases = [
    {
      title: 'SoMe',
      client: 'Brand Storytelling Content', 
      image: '/images/deer1.jpg'
    },
    {
      title: 'Commercial Direction',
      client: 'Lifestyle Beauty Impact',
      image:  '/images/rhino.jpg',
    },
  ];

  return (
    <div className="bg-[#f5f3ee] text-black min-h-screen font-sans">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
    <iframe
  src="https://player.vimeo.com/video/130338745?background=1"
  className="absolute top-0 left-0 w-full h-full object-cover scale-[1.4]"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
/>

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-16 text-white">
          <div className="flex justify-between items-start text-sm tracking-[0.25em] uppercase opacity-90">
            <div>THE DANISH AFFAIR</div>
            <div>Copenhagen</div>
          </div>

          <div className="max-w-3xl pb-12 md:pb-20">
            <h1 className="text-5xl md:text-8xl leading-[0.95] font-light tracking-tight mb-8">
              Films with
              <br />
              human presence.
            </h1>

            <p className="text-lg md:text-2xl max-w-xl leading-relaxed text-white/85 font-light">
              Cinematic commercials, documentaries and visual storytelling.
              Created with calm precision and a human eye.
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.25em] text-white/50">
  Directed by Michael Abel
</p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 md:px-16 py-28 border-b border-black/10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] mb-6 opacity-50">
              About
            </p>
          </div>

          <div>
            <p className="text-3xl md:text-5xl leading-tight font-light mb-10">
              International film making based in Copenhagen.
            </p>

            <p className="text-lg leading-relaxed text-black/70 max-w-2xl">
             The Danish Affair is founded by director and producer Michael Abel.
<br />
Commercials, content and branded storytelling with a cinematic touch.
            </p>
          </div>
        </div>
      </section>

      {/* CASES */}
<section className="px-8 md:px-16 py-28">

  <div className="flex justify-between items-end mb-16">
    <div>
      <p className="text-sm uppercase tracking-[0.25em] mb-6 opacity-50">
        Selected Work
      </p>

      <h2 className="text-4xl md:text-6xl font-light tracking-tight">
        Film
      </h2>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-10">

    {cases.map((item, index) => (
      <Link
        href={item.title === 'SoMe' ? '/some' : '/commercial-direction'}
        key={index}
        className="group cursor-pointer block"
      >

<div className="overflow-hidden rounded-[24px] mb-5 bg-black relative">

  {item.title === 'SoMe' ? (

    <div className="relative pt-[52%]">

      <iframe
        src="https://player.vimeo.com/video/451860262?background=1"
className="absolute top-0 left-0 w-full h-full scale-[1.35] pointer-events-none"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />

    </div>

  ) : (

    <div className="relative pt-[52%]">

      <iframe
        src="https://player.vimeo.com/video/130338745?background=1"
        className="absolute top-0 left-0 w-full h-full scale-[1.35] pointer-events-none"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />

    </div>

  )}

</div>

        <div className="flex justify-between items-start gap-6">

          <div>
            <h3 className="text-2xl font-light mb-1">
              {item.title}
            </h3>

            <p className="text-black/50">
              {item.client}
            </p>
          </div>

          <div className="text-black/30 text-sm pt-2">
            →
          </div>

        </div>

      </Link>
    ))}

  </div>

</section>



      {/* CONTACT */}
      <section className="px-8 md:px-16 py-28 border-t border-black/10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] mb-6 opacity-50">
              Contact
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
              Let’s make something meaningful.
            </h2>

            <div className="space-y-4 text-lg text-black/70">
              <p>Michael Abel</p>
              <p>abel.film@gmail.com</p>
              <p>+45 21 26 95 23</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
