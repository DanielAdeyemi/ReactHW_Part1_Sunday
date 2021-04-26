import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";

export default class TicketControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			masterTicketList: [],
			selectedTicket: null,
			editing: false
		};
	}

	handleClick = () => {
		if (this.state.selectedTicket != null) {
			this.setState({
				formVisibleOnPage: false,
				selectedTicket: null,
			});
		} else {
			this.setState((prevState) => ({
				formVisibleOnPage: !prevState.formVisibleOnPage,
			}));
		}
	};

	handleEditClick = () => {
		this.setState({editing: true});
	}

	handleAddingNewTicketToList = (newTicket) => {
		const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
		this.setState({
			masterTicketList: newMasterTicketList,
			formVisibleOnPage: false,
		});
	};

	handleChangingSelectedTicket = (id) => {
		const selectedTicket = this.state.masterTicketList.filter(
			(ticket) => ticket.id === id
		)[0];
		this.setState({ selectedTicket: selectedTicket });
	};

	handleDeletingTicket = (id) => {
		const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id !== id);
		this.setState({
			masterTicketList: newMasterTicketList,
			selectedTicket: null
		}); 
	}

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.state.selectedTicket != null) {
			currentlyVisibleState = (
				<TicketDetail ticket={this.state.selectedTicket} 
				oncClickingDelete = {this.handleDeletingTicket}
				onClickingEdit = {this.handleEditClick} />
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
					ticketList={this.state.masterTicketList}
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
