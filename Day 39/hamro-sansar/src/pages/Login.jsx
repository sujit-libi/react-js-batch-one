import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../contexts/FakeAuthContext';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticate } = useAuth();
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');

  useEffect(() => {
    if (isAuthenticate) navigate('/dashboard');
  }, [isAuthenticate]);

  function handleOnSubmit(e) {
    e.preventDefault();
    login(email, password);
    return;
  }

  return (
    <main className={styles.login}>
      <Navbar />
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
