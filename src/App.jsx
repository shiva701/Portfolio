import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Banner from './components/Banner.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="page">
      <div className="hero-shell">
        <Nav />
        <Hero />
      </div>
      <main>
        <About />
        <Work />
        <Experience />
        <Projects />
        <Banner />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
