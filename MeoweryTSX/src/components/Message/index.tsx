import React from "react";
import PropTypes from "prop-types";

function Message({ messageText }) {

    return ( 
      <div className="message">{messageText}</div>   
  );
  }

  Message.propTypes = {
    messageText: PropTypes.string
  };

export default Message;
