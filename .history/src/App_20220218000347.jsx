import './App.css';
import Header from './components/header/header';
import Package from './components/package/package';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Package />} />
        <Route exact path='/add' />
      </Routes>
    </div>
  );
}

export default App;
