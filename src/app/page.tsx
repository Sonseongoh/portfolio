import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-800/50 py-8 text-center text-sm text-gray-500">
        © 2026 손성오 · Built with Next.js
      </footer>
    </>
  );
}
