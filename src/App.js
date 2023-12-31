import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
