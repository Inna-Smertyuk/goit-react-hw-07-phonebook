import React from "react";
import { useDeleteContactMutation } from "../../redux/slice";
import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      <p className={s.text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={s.contactBtn}
        onClick={() => {
          deleteContact(id);
          alert("Contact has been deleted");
        }}
        disabled={isDeleting}
      >
        {isDeleting ? "...." : "Delete"}
      </button>
    </>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
