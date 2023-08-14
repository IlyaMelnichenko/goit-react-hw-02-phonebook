import { PhoneItem } from './PhoneItem';

export const PhoneList = ({ deleteContact, contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <PhoneItem contact={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};
