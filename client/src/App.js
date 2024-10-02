import TextGenerator from './components/AI_writer/TextGenerator.js';
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="flex flex-col bg-[#50164a] ">
      
      <Header />
      
      <TextGenerator />
    
      <Footer />

    </div>
  );
}

export default App;
