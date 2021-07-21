import React, { Component } from 'react';
import ButtonCommon from './ButtonCommon';
import InputCommon from './InputCommon';

class ControllerContainer extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-center mt-20">
          <InputCommon placeHold="Set max" name="maxValueInput" min="0" />
          <InputCommon placeHold="Set min" name="minValueInput" min="0" />
          <InputCommon placeHold="Set step" name="stepInput" min="1" />

          <ButtonCommon buttonName="Set" type="submit" />
        </div>
      </form>
    );
  }
}
export default ControllerContainer;
