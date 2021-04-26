import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

export default function NewTicketForm(props) {
	function handleNewTicketFormSubmission(event) {
		event.preventDefault();
		props.onNewTicketCreation({
			names: event.target.names.value,
			location: event.target.location.value,
			issue: event.target.issue.value,
			id: v4(),
		});
		console.log(event.target.names.value);
		console.log(event.target.location.value);
		console.log(event.target.issue.value);
	}
	return (
		<>
			<ReusableForm
			formSubmissionHandler="{handleNewTicketFormSubmission}"
			buttonText="Help!" />
		</>
	);
}

NewTicketForm.propTypes = {
	onNewTicketCreation: PropTypes.func,
};
