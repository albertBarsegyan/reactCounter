import React, { Component } from 'react';

class ButtonCommon extends Component {


  render() {
    const { buttonName, clickEvent, type } = this.props;
    return (
      <>
        <button
          className="border border-green-500 px-5 py-2 text-green-500 text-2xl active:bg-green-800 hover:bg-green-500 hover:text-white duration-150"
          type={type ?? 'button'}
          onClick={clickEvent}
        >
          {buttonName}
        </button>
      </>
    );
  }
}
export default ButtonCommon;
