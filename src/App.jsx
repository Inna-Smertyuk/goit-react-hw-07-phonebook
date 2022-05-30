import React, { useState } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("");

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList filter={filter} />
    </div>
  );
}

export default App;
