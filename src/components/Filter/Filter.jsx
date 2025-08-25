import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <div className={css.wrap}>
      <input
        className="input"
        placeholder="Search by name or phone…"
        value={value}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
}
