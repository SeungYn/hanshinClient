import './App.css';
import Header from './components/header/header';
import Package from './components/package/package';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddBoxs from './components/addboxs/addBoxs';
import { fetchToken, useAuth } from './context/AuthContext';
import AllPackages from './pages/allPackages';
import jwt_decode from 'jwt-decode';

function App({ packageService }) {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const modifyable = jwt_decode(user.token).authority;

  const onLogout = () => {
    logout();
  };

  const goHome = () => {
    navigate('/');
  };

  const goAddPackages = () => {
    navigate('/add');
  };

  return (
    <div className='app'>
      <Header goHome={goHome} onLogout={onLogout} />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <AllPackages
              packageService={packageService}
              modifyable={modifyable}
              goAddPackages={goAddPackages}
            />
          }
        />
        <Route exact path='/add' element={<AddBoxs />} />
      </Routes>
    </div>
  );
}

export default App;
