export const PhoneItem = ({ deleteContact, contact }) => {
  return (
    <>
      {contact.Name}:{contact.Number}
      <button
        value={contact.id}
        onClick={evt => deleteContact(evt.target.value)}
      >
        Delete
      </button>
    </>
  );
};
