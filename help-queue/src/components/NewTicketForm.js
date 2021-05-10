import React from "react";
// import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

export default function NewTicketForm(props) {
	const firestore = useFirestore();
	function addTicketToFireStore(event) {
		event.preventDefault();
		props.onNewTicketCreation();
		return firestore.collection('tickets').add({
			names: event.target.names.value,
			location: event.target.location.value,
			issue: event.target.issue.value,
			timeOpen: firestore.FieldValue.serverTimestamp()
		});
	}

	return (
		<>
			<ReusableForm
				formSubmissionHandler={addTicketToFireStore}
				buttonText="Help!"
			/>
		</>
	);
}

NewTicketForm.propTypes = {
	onNewTicketCreation: PropTypes.func
};
