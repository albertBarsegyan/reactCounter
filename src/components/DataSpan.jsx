import React, { Component } from 'react';

class DataSpan extends Component {


  render() {
    const { staticText, dynamicText } = this.props;
    return (
      <div className="mx-5">
        <span className="text-xl text-green-500">
          <span>{staticText}</span>
          {dynamicText}
        </span>
      </div>
    );
  }
}
export default DataSpan;
