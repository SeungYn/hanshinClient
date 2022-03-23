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
      <nav>
        <div className='navbar'>
          <button onClick={onAll} className={styles.navbar__item}>
            전체
          </button>
          <button onClick={onPackage} className={styles.navbar__item}>
            택배
          </button>
          <button onClick={onPost} className={styles.navbar__item}>
            등기
          </button>
          {modifyable ? (
            <button onClick={goAddPackages} className={styles.navbar__item}>
              추가
            </button>
          ) : (
            ''
          )}
          {modifyable ? (
            <button onClick={onPost} className={styles.navbar__item}>
              찾기
            </button>
          ) : (
            ''
          )}
        </div>
      </nav>
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
          path='/add'
          element={
            <AddBoxs packageService={packageService} navigate={navigate} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
