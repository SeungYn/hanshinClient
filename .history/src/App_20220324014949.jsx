import './App.css';
import Header from './components/header/header';
import Package from './components/package/package';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddBoxs from './components/addboxs/addBoxs';
import { fetchToken, useAuth } from './context/AuthContext';
import AllPackages from './pages/allPackages';
import jwt_decode from 'jwt-decode';
import Navbar from './components/navbar/navbar';

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
      <Navbar modifyable={modifyable} />
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

        <Route
          exact
          path='/package'
          element={
            <AllPackages
              packageService={packageService}
              modifyable={modifyable}
              goAddPackages={goAddPackages}
              param='택배'
            />
          }
        />

        <Route
          exact
          path='/registered'
          element={
            <AllPackages
              packageService={packageService}
              modifyable={modifyable}
              goAddPackages={goAddPackages}
              param='등기'
            />
          }
        />

        <Route
          exact
          path='/add'
          element={
            <AddBoxs packageService={packageService} navigate={navigate} />
          }
        />
        <Route exact path='/dayfind'>
          공사중
        </Route>
      </Routes>
    </div>
  );
}

export default App;
