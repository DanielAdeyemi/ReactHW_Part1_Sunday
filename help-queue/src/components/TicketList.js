import React from 'react';
import Ticket from './Ticket';
import PropTypes from "prop-types";

export default function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.TicketList.map((ticket) =>
        <Ticket 
					whenTickedClicked = {props.onTicketSelection}
					names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
					id={ticket.id}
          key={ticket.id} />
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
	TicketList : PropTypes.array,
	onTicketSelection: PropTypes.func
}