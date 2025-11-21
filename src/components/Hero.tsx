import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero-bg.png"
          alt="Bright sunlight refracted in swimming pool"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Main Card */}
        <div className="animate-fade-in-up relative mt-24 flex w-full max-w-lg flex-col items-center rounded-3xl bg-white/30 pt-32 pb-12 px-8 backdrop-blur-md shadow-2xl border border-white/40">

          {/* Curved Banner for Logo */}
          <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 overflow-hidden rounded-full bg-white p-2 shadow-lg ring-4 ring-white/50">
            <div className="relative h-full w-full rounded-full bg-white overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/img/logo-750x300.webp"
                  alt="Swimwell Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          </div>

          {/* Address Panel */}
          <div className="mb-8 max-w-xs text-center">
            <h2 className="mb-2 text-lg font-bold text-swimwell-dark">
              Jan Cilliers Primary School
            </h2>
            <p className="text-base font-medium text-swimwell-dark/80">
              49 Lower Park Drive, Parkview<br />Johannesburg 2193
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="https://wa.me/27844081001"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-swimwell-aqua px-8 py-3 font-bold text-white shadow-lg border border-white/40 transition-all duration-300 hover:bg-cyan-400 hover:scale-105 hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
          >
            <span className="mr-2">Book a Lesson</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>

          <p className="mt-6 text-sm font-semibold text-swimwell-dark/80">
            Contact Monique: 084 408 1001
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-10 w-10 text-white/80 drop-shadow-md"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
}
