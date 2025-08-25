import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.grid}>
      {contacts.map(c => (
        <div key={c.id} className={css.item}>
          <div className={css.top}>
            <div>
              <div className={css.name}>{c.name}</div>
              <div className={css.number}>{c.number}</div>
            </div>
            <div className={css.actions}>
              {/* İstersen düzenleme için ayrı buton da ekle */}
              <button className="btn btnDanger" onClick={() => dispatch(deleteContact(c.id))}>
                Delete
              </button>
            </div>
          </div>
          <div className="badge">Contact</div>
        </div>
      ))}
    </div>
  );
}
