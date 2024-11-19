import Navbar from './comps/Navbar.js';
import TextGenerator from './comps/AI_writer/TextGenerator.js';
import Hero from './comps/Hero.js'
import Footer from './comps/Footer.js'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Hero />
      
      <TextGenerator />
    
      

      <Footer />

    </div>
  );
}

export default App;
