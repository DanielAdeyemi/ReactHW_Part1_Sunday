import React from 'react';
import Ticket from './Ticket';

const masterTicketList = [
	{
		names: "Thato and Haley",
		location: "3A",
		issue: "Firebase won't save record. Halp.",
	},
	{
		names: "Sleater and Kinney",
		location: "4B",
		issue: "Prop types are throwing an error.",
	},
	{
		names: "Imani & Jacob",
		location: "9F",
		issue: "Child component isn't rendering.",
	},
];

function TicketList() {
  return (
    <React.Fragment>
      <Ticket 
        location="3A"
        names="Thato and Haley"
        issue="Firebase will not save record!"/>
      <Ticket 
        location="4B"
        names="Sleater and Kinney"
        issue="Prop types are throwing an error."/>
    </React.Fragment>
  );
}

export default TicketList;