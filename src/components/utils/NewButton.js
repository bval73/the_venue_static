import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const NewButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      target={props.target}
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img 
        src={TicketIcon}
        className="iconImage"
        alt="icon image"
      />
        {props.text}
    </Button>
  );
};

export default NewButton;