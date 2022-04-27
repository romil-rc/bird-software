import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BigDiv from './components/BigDiv';
import BelowPart from './components/BelowPart';
import SlideContent from './components/SlideContent';
import RestContent from './components/RestContent';

function App() {
  return (
    <div className="App font-montserrat">
      <Navbar />
      <Home />
      <BigDiv />
      <BelowPart />
      <SlideContent />
      <RestContent />
    </div>
  );
}

export default App;
