import './App.css';
import Header from './components/header/header';
import Package from './components/package/package';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddBoxs from './components/addboxs/addBoxs';
import { useAuth } from './context/AuthContext';

function App() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  console.log(user, logout);
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Package />} />
        <Route exact path='/add' element={<AddBoxs />} />
      </Routes>
    </div>
  );
}

export default App;
