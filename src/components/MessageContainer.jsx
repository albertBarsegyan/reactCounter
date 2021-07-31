import React, { Component } from 'react';

class MessageContainer extends Component {
  render() {
    const { messageValue } = this.props;

    return (
      <div className="text-center fixed w-full top-1">
        <span className="text-4xl text-red-600">{messageValue}</span>
      </div>
    );
  }
}

export default MessageContainer;
