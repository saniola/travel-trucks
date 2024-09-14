import './App.module.scss';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Button text="Search" onClick={() => alert('Search')} />
      <Button
        text="Load More"
        onClick={() => alert('Load More')}
        variant="secondary"
      />
    </>
  );
}

export default App;
