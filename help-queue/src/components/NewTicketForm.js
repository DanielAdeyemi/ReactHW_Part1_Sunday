import React from "react";
import { v4 } from "uuid";

export default function NewTicketForm() {
  return (
    <>
    <form onSubmit={handleNewTicketFormSubmission}>
      <input type="text" name="names" placeholder="Pair Names" />
      <input type="text" name="location" placeholder="Location" />
      <textarea name="issue" placeholder="Describe your issue" />
      <button type="submit">Help!</button>
    </form>
    </>
  );
}