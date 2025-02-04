import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;

// Create Page named Dashboard or AppLayout with its module css
// Create AppNavbar just like Navbar with cities and countries as list
// Run fake json server with provided data in data folder
// Fetch list of cities from FakeAPI endpoing
