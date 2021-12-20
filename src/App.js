import './App.css';
import { Portfolio } from './components/Filter/Portfolio';
import Store from './components/Layouts/Store';

function App() {
  return (
    <>
    <div className='container'>
      <div className='portfolio_title'>Портфолио с фильтрами</div>
      <Portfolio/>
    </div>
    <div className='box'>
      <div className='store_title'>Расположение товаров</div>
      <Store/>
    </div>
    </>
  );
}

export default App;
