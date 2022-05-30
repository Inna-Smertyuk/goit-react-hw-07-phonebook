import React from "react";
import PropTypes from "prop-types";
import { useGetContactsQuery } from "../../redux/slice";
import ContactItem from "../ContactItem/ContactItem";
import s from "./ContactList.module.css";

function ContactList({ filter }) {
  const { data: contacts, isFetching } = useGetContactsQuery();

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!contacts) {
      return;
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const showContacts = visibleContacts();
  return (
    <>
      {isFetching && <p className={s.text}>Loading...</p>}
      {contacts && (
        <ul className={s.list}>
          {showContacts.map(({ id, name, phone }) => (
            <li key={id} className={s.item}>
              <ContactItem id={id} name={name} number={phone} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
ContactList.propTypes = {
  filter: PropTypes.string,
};
export default ContactList;
