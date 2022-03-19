import React, {
  createContext,
  createRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
} from 'react';

const AuthContext = createContext({});

const contextRef = createRef();

export function AuthProvider({ authService, authErrorEventBus, children }) {
  const [user, setUser] = useState(undefined);

  useImperativeHandle(contextRef, () => (user ? user.token : undefined));

  useEffect(() => {
    authErrorEventBus.listen((err) => {
      console.log(err);
      setUser(undefined);
    });
  }, [authErrorEventBus]);

  useEffect(() => {
    authService.me().then(setUser).catch(console.log);
  });

  const signUp = useCallback(
    async (username, password, name, email) => {
      return authService
        .signup(username, password, name, email)
        .then((user) => setUser(user));
    },
    [authService]
  );

  const logIn = useCallback(
    async (username, password) =>
      authService.login(username, password).then((user) => setUser(user)),
    [authService]
  );

  const logout = useCallback(
    async () => authService.logout().then(() => setUser(undefined)),
    [authService]
  );

  const context = useMemo(
    () => (
      {
        user,
        signUp,
        logIn,
        logout,
      },
      [user, signUp, logIn, logout]
    )
  );

  return (
    <AuthContext.Provider value={context}>
      {user ? (
        children
      ) : (
        <div className='app'>
          <Headers />
        </div>
      )}
    </AuthContext.Provider>
  );
}

export class AuthErrorEventBus {
  listen(callback) {
    this.callback = callback;
  }

  notify(error) {
    this.callback(error);
  }
}

export default AuthContext;
export const fetchToken = () => contextRef.current;
export const useAuth = () => useContext(AuthContext);