import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrap}>
      <div className={css.avatar} aria-hidden />
      <span className={css.name}>{user?.name}</span>
      <button className="btn btnGhost" onClick={() => dispatch(logOut())}>Log out</button>
    </div>
  );
}
