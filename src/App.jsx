import { Routes, Route } from 'react-router-dom'; // Тільки Routes та Route, без Router
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Details from './pages/Details/Details';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id/*" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
