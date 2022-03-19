import React, { useState } from 'react';
import Alert from '../components/alert/alert';
import styles from './login.module.css';

const Login = ({ onSignUp, onLogin }) => {
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (signup) {
      onSignUp(username, password, name, email).catch(setError);
    } else {
      onLogin(username, password).catch(setError);
    }
  };

  const setError = (error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  const onChange = (event) => {
    const {
      target: { name, value, checked },
    } = event;
    switch (name) {
      case 'username':
        return setUsername(value);
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'signup':
        return setSignup(checked);
      default:
    }
  };

  return (
    <>
      <Alert text={text} isAlert={isAlert} />
      <div className={styles.test}>
        <form className={styles.auth__form} onSubmit={onSubmit}>
          <input
            name='username'
            type='text'
            placeholder='Id'
            value={username}
            onChange={onChange}
            className={styles.auth__input}
            required
          />
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            className={styles.auth__input}
            onChange={onChange}
            required
          />
          {signup && (
            <input
              name='name'
              type='text'
              placeholder='Name'
              value={name}
              onChange={onChange}
              className={styles.auth__input}
              required
            />
          )}
          {signup && (
            <input
              name='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={onChange}
              className={styles.auth__input}
              required
            />
          )}
          <div className='form-signup'>
            <input
              name='signup'
              id='signup'
              type='checkbox'
              onChange={onChange}
              checked={signup}
            />
            <label htmlFor='signup'> Create a new account?</label>
          </div>
          <button className='form-btn auth-form-btn' type='submit'>
            {signup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
