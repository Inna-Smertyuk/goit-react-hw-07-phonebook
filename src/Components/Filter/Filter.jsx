import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={s.wrapper}>
    Find contacts by name
    <input
      className={s.input}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
