import './App.module.scss';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Tag from './components/Tag/Tag';
import Input from './components/Input/Input';

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
      <Tag text="Automatic" />
      <Tag text="AC" />
      <Tag text="Petrol" />
      <Tag text="Kitchen" />
      <Tag text="Radio" />
      <Tag text="Bathroom" />
      <Tag text="2 adults" />

      <Input placeholder="Name*" name="Name" />
      <Input
        label="Location"
        placeholder="City"
        icon="icon-map"
        name="Location"
      />
      <Input placeholder="Booking Date" withCalendar name="Date" />
    </>
  );
}

export default App;
