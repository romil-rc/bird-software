import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BigDiv from './components/BigDiv';
import BelowPart from './components/BelowPart';
import SlideContent from './components/SlideContent';
import RestContent from './components/RestContent';
import JoinUs from './components/JoinUs';
import Why from './components/Why';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-montserrat">
      <Navbar />
      <Home />
      <BigDiv />
      <BelowPart />
      <SlideContent />
      <RestContent />
      <JoinUs />
      <Why />
      <Footer />
    </div>
  );
}

export default App;
