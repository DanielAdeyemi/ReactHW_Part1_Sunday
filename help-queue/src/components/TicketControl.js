import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";
import EditTicketForm from "./EditTicketForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TicketControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTicket: null,
			editing: false
		};
	}

	handleClick = () => {
		if (this.state.selectedTicket != null) {
			this.setState({
				selectedTicket: null,
				editing: false
			});
		}
	};

	handleEditClick = () => {
		this.setState({ editing: true });
	}

	handleEditingTicketInList = (ticketToEdit) => {
		const { dispatch } = this.props;
		const { id, names, location, issue } = ticketToEdit;
		const action = {
			type: 'ADD_TICKET',
			id: id,
			names: names,
			location: location,
			issue: issue
		}
		dispatch(action);
		this.setState({
			editing: false,
			selectedTicket: null
		});
	};

	handleAddingNewTicketToList = (newTicket) => {
		const { dispatch } = this.props;
		const { id, names, location, issue } = newTicket;
		const action = {
			type: 'ADD_TICKET',
			id: id,
			names: names,
			location: location,
			issue: issue
		}
		dispatch(action);
	};

	handleChangingSelectedTicket = (id) => {
		const selectedTicket = this.props.masterTicketList[id];
		this.setState({ selectedTicket: selectedTicket });
	};

	handleDeletingTicket = (id) => {
		const { dispatch } = this.props;
		const action = {
			type: 'DELETE_TICKET',
			id: id
		}
		dispatch(action);
		this.setState({ selectedTicket: null });
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.state.editing) {
			currentlyVisibleState = (
				<EditTicketForm ticket={this.state.selectedTicket}
				onEditTicket = {this.handleEditingTicketInList}
				/>
			);
			buttonText = "Return to Ticket List";
		} else if (this.state.selectedTicket != null) {
			currentlyVisibleState = (
				<TicketDetail
					ticket={this.state.selectedTicket}
					onClickingDelete={this.handleDeletingTicket}
					onClickingEdit={this.handleEditClick}
				/>
			);
			buttonText = "Return to ticket list";
		} else if (this.state.formVisibleOnPage) {
			currentlyVisibleState = (
				<NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
			);
			buttonText = "Return to the ticket list";
		} else {
			currentlyVisibleState = (
				<TicketList
					ticketList={this.props.masterTicketList}
					onTicketSelection={this.handleChangingSelectedTicket}
				/>
			);
			buttonText = "Add Ticket";
		}
		return (
			<>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText} </button>
			</>
		);
	}
}

TicketControl.propTypes = {
	masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
	return {
		masterTicketList: state.masterTicketList,
		formVisibleOnPage: state.formVisibleOnPage
	}
}
TicketControl = connect(mapStateToProps)(TicketControl);
export default TicketControl;

TicketControl.propTypes = {
	masterTicketList: PropTypes.object,
	formVisibleOnPage: PropTypes.bool
};
