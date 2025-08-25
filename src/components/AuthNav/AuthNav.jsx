import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import nav from '../Navigation/Navigation.module.css';

export default function AuthNav() {
  const linkClass = ({ isActive }) =>
    isActive ? `${nav.link} ${nav.active}` : nav.link;

  return (
    <div className={css.row}>
      <NavLink to="/register" className={linkClass}>Register</NavLink>
      <NavLink to="/login" className={linkClass}>Login</NavLink>
    </div>
  );
}
