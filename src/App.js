import './App.css';
import Header from './components/header';
import Navigator from './components/left_navigation';
import Center from './components/center';

function App() {
  return (
    <label>
      <Header />
      <Navigator />
      <Center />
    </label>
  );
};

export default App;
