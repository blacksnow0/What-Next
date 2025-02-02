import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/Navbar";
import Cards from "@/components/landingPage/Cards";
import Support from "@/components/landingPage/Support";
import Footer from "@/components/Footer";
import PopularSearches from "@/components/landingPage/PopularSearches";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="max-w-screen-xl mx-auto px-4">
        <div className="absolute top-10 left-10 w-24 h-24 bg-orange-500 opacity-30 rounded-full blur-3xl "></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500 opacity-30 rounded-full blur-3xl "></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-500 opacity-30 rounded-full blur-3xl "></div>
        <Hero />
        <Cards />
        <Support />
      </main>
      <div>
        <div className="absolute top-10 left-10 w-24 h-24 bg-orange-500 opacity-30 rounded-full blur-3xl "></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500 opacity-30 rounded-full blur-3xl "></div>
        <PopularSearches />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-500 opacity-30 rounded-full blur-3xl "></div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
