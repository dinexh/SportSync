import './App.css';
import './styles/toast.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Nav from './components/nav/nav';
import Footer from './components/footer/Footer';

// UI
import Hero from './UI/hero/hero';
import Home from './UI/home/home';

// pages
import Register from './pages/auth/register/register';
import Login from './pages/auth/login/login';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
              <Nav />
                <Hero />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
