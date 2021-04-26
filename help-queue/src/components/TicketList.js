import React from 'react';
import Ticket from './Ticket';
import PropTypes from "prop-types";

export default function TicketList(props) {
  return (
    <>
      <hr />
      {props.ticketList.map((ticket) =>
        <Ticket 
					whenTickedClicked = {props.onTicketSelection}
					names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
					id={ticket.id}
          key={ticket.id} />
      )}
    </>
  );
}

TicketList.propTypes = {
	TicketList : PropTypes.array,
	onTicketSelection: PropTypes.func,
  ticket: PropTypes.object
}