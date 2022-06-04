import React from "react";
import { useSelector } from "react-redux";
import { useGetContactsQuery } from "../../redux/slice";
import ContactItem from "../ContactItem/ContactItem";
import s from "./ContactList.module.css";

function ContactList() {
  const filter = useSelector((state) => state.filter.value);
  const { data: contacts = [], isFetching } = useGetContactsQuery();

  const visibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
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

export default ContactList;
