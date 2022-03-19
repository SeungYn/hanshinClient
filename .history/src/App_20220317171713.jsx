import './App.css';
import Header from './components/header/header';
import Package from './components/package/package';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddBoxs from './components/addboxs/addBoxs';
import { fetchToken, useAuth } from './context/AuthContext';
import AllPackages from './pages/allPackages';

function App({ packageService }) {
  const navigate = useNavigate();
  console.log(fetchToken());
  const { user, logout } = useAuth();

  const onLogout = () => {
    logout();
  };

  return (
    <div className='app'>
      <Header onLogout={onLogout} />
      <Routes>
        <Route
          exact
          path='/'
          element={<AllPackages packageService={packageService} />}
        />
        <Route exact path='/add' element={<AddBoxs />} />
      </Routes>
    </div>
  );
}

export default App;
