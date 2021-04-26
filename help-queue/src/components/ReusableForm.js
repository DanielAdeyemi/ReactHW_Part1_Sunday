import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props) {
  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text"
        name="names"
        placeholder="Pair Names" />
        <input type="text"
        name="location"
        placeholder="Location" />
        <textarea
        name="issue"
        placeholder="Describe your issue" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};