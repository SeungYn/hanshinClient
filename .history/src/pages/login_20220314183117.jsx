import React, { useState } from 'react';
import styles from './login.module.css';

const Login = (props) => {
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [isAlert, setIsAlert] = useState(false);

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
      <form className={styles.auth__form}>
        <input
          name='username'
          type='text'
          placeholder='Id'
          value={username}
          onChange={onChange}
          className='form-input'
          required
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          className='form-input'
          onChange={onChange}
        />
        {signup && (
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={name}
            onChange={onChange}
            className='form-input'
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
            className='form-input'
            required
          />
        )}
        {signup && (
          <input
            name='url'
            type='url'
            placeholder='Profile Image URL'
            value={url}
            onChange={onChange}
            className='form-input'
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
    </>
  );
};

export default Login;
