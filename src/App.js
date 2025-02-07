import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import Military from './components/Military';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Military/>
      <Contact />
    </div>
  );
}

export default App;