import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderMain from './components/header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderMain />
      </BrowserRouter>
    </div>
  );
}

export default App;
