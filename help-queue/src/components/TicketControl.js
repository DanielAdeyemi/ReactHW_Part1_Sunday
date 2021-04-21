import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

export default class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage : false,
      masterTicketList : [],
      selectedTicket : null
    };
  }

handleClick = () => {
  this.setState(prevState => ({
    formVisibleOnPage: !prevState.formVisibleOnPage}));
}

handleChangingSelectedTicket = (id) => {
  const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id) [0];
  this.setState({selectedTicket: selectedTicket});
}

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to the ticket list";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    }
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText} </button>
      </>
    );
  }
}