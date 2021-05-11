import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

export default function TicketList(props) {
	useFirestoreConnect([{ collection: "tickets" }]);

	const tickets = useSelector((state) => state.firestore.ordered.tickets);
	if (isLoaded(tickets)) {
		return (
			<>
				<hr />
				{tickets.map((ticket) => (
					<Ticket
						whenTickedClicked={props.onTicketSelection}
						names={ticket.names}
						location={ticket.location}
						issue={ticket.issue}
						id={ticket.id}
						key={ticket.id}
					/>
				))}
			</>
		);
	} else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}

TicketList.propTypes = {
	onTicketSelection: PropTypes.func,
};
