import DarkModeToggle from './components/DarkModeToggle';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-brutal-black transition-colors duration-500">
      <DarkModeToggle />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Featured />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
