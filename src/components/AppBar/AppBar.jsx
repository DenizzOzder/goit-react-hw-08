import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="headerSticky">
      <div className="container">
        <div className={css.bar}>
          <div className={css.left}>
            <div className={css.brand}>Contacts</div>
            <Navigation />
          </div>
          <div className={css.right}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </div>
      </div>
    </div>
  );
}
