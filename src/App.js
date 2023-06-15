import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
          <Header />
        </div>
        <h2>Welcome to my website</h2>
      
       <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/create" element={<Add />} />
        <Route path="/edit" element={<Edit />} /> 
        </Routes>
       </Router>
       <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
