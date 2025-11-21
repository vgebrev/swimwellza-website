import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Contact />

      {/* Footer */}
      <footer className="bg-swimwell-dark py-8 text-center text-white/60">
        <div className="mb-6 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=61554799976207"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:opacity-80"
            aria-label="Facebook"
          >
            <Image
              src="/img/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="h-6 w-6 invert opacity-60"
            />
          </a>
          <a
            href="https://www.instagram.com/swimwellza/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:opacity-80"
            aria-label="Instagram"
          >
            <Image
              src="/img/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="h-6 w-6 invert opacity-60"
            />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Swimwell. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
