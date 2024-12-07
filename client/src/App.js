import './App.css';
// components
import Nav from './components/nav/nav';
import Footer from './components/footer/Footer';

// UI
import Hero from './UI/hero/hero';
import Home from './UI/home/home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
