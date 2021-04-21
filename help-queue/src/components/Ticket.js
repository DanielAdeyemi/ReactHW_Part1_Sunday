import React from 'react';
import PropTypes from 'prop-types';

export default function Ticket(props) {
  return (
		<React.Fragment>
			<div onClick={() => props.whenTickedClicked(props.id)}>
				<h3>
					{props.location} - {props.names}
				</h3>
				<p>
					<em>{props.issue}</em>
				</p>
				<hr />
			</div>
		</React.Fragment>
	);
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTickedClicked: PropTypes.func
};

