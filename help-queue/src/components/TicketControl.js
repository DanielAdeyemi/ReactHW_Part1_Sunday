import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

export default class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage : false
    };
  }

  render() {
    let currentlyVisibleState = null;
    let addTicketButton = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
    } else {
      currentlyVisibleState = <TicketList />
      addTicketButton = <button onClick={this.handleClick}>Add Ticket </button>
    }
    return(
      <>
        {currentlyVisibleState}
        {addTicketButton}
      </>
    );
  }
}