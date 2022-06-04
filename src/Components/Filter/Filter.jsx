import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsFilter } from "../../redux/FilterSlice";
import s from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.value);

  const changeFilter = (e) => {
    dispatch(contactsFilter(e.currentTarget.value));
  };

  return (
    <label className={s.wrapper}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

export default Filter;
