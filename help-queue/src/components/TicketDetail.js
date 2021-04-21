import React from "react";
import PropTypes from "prop-types";

export default function TicketDetail(props) {
  const { ticket } = props;
  return(
    <>
      <h1>Ticlet Details</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <hr />
    </>
  )
}

TicketDetail.propTypes = {
  ticket: PropTypes.object
};