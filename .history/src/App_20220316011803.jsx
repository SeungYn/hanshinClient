import './App.css';
import Header from './components/header/header';
import Package from './components/package/package';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddBoxs from './components/addboxs/addBoxs';
import { useAuth } from './context/AuthContext';

function App() {
  const navigate = useNavigate();
  console.log(useAuth());
  const { user, logout } = useAuth();

  const onLogout = () => {
    logout();
  }

  return (
    <div className='app' onLogout={}>
      <Header />
      <Routes>
        <Route exact path='/' element={<Package />} />
        <Route exact path='/add' element={<AddBoxs />} />
      </Routes>
    </div>
  );
}

export default App;
