import React from 'react';
import ticketsImage from './../img/ticket.png';

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="A ticket" />
    </React.Fragment>
  );
}

export default Header;