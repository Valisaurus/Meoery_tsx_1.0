// import React from "react";
import * as PropTypes from "prop-types";

interface MessageProps {
  messageText: string;
}

function Message({ messageText }: MessageProps) {

    return ( 
      <div className="message">{messageText}</div>   
  );
  }

  Message.propTypes = {
    messageText: PropTypes.string
  };

export default Message;
