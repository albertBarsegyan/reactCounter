/* eslint-disable operator-linebreak */
import React, { Component } from 'react';
import ButtonCommon from './ButtonCommon';
import ControllerContainer from './ControllerContainer';
import LocalStorage from './LocalStorage';
import MessageContainer from './MessageContainer';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: Number(localStorage.getItem('minVal')) ?? 0,
      step: Number(localStorage.getItem('step')) ?? 1,
      minValue: Number(localStorage.getItem('minVal')) ?? 0,
      maxValue: Number(localStorage.getItem('maxVal')) ?? 100,
      message: '',
    };
  }

  handleIncrement = () => {
    const { counter, step, maxValue, minValue } = this.state;
    if (counter + step < maxValue) {
      this.setState({ counter: counter + step });
    } else {
      this.setState({ counter: maxValue });
    }
  };

  handleDecrement = () => {
    const { counter, step, minValue } = this.state;
    if (counter > minValue + 1 + step) {
      this.setState({ counter: counter - step });
    } else {
      this.setState({ counter: minValue });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    let formData = new FormData(evt.target);
    formData = [...formData.values()].map((itm) => Number(itm));

    if (formData[0] <= formData[1]) {
      this.setState({ message: 'Max value must be greater than Min' });
    } else if (formData[2] >= formData[0] - formData[1]) {
      this.setState({
        message: `Step must be less than ${formData[0] - formData[1]}`,
      });
    } else {
      this.setState({
        message: '',
      });
      this.setState({
        counter: formData[1],
        step: formData[2],
        minValue: formData[1],
        maxValue: formData[0],
      });
      localStorage.setItem('maxVal', formData[0]);
      localStorage.setItem('minVal', formData[1]);
      localStorage.setItem('step', formData[2]);
    }
  };

  render() {
    const { message, counter, maxValue, minValue } = this.state;
    return (
      <div>
        {message !== '' ? <MessageContainer messageValue={message} /> : null}
        {/* counter setups */}
        <ControllerContainer
          min={minValue}
          max={maxValue}
          onSubmit={this.handleSubmit}
        />
        {/* local storage values */}
        <LocalStorage
          maxVal={localStorage.getItem('maxVal') ?? '0'}
          minVal={localStorage.getItem('minVal') ?? '0'}
          step={localStorage.getItem('step') ?? '0'}
        />
        {/* counter controller buttons */}
        <div className="flex items-center justify-center flex-row">
          <div className="mx-4 my-4">
            <ButtonCommon
              buttonName="Decrement"
              clickEvent={this.handleDecrement}
            />
          </div>
          <div className="mx-4 my-4 w-20 text-center">
            <span className="text-5xl text-green-500">{counter}</span>
          </div>
          <div className="mx-4 my-4">
            <ButtonCommon
              buttonName="Increment"
              clickEvent={this.handleIncrement}
            />
          </div>
        </div>
        <div className="flex align-center justify-center">
          <ButtonCommon
            buttonName="Reset"
            clickEvent={() => {
              this.setState({ counter: localStorage.getItem('minVal') ?? 0 });
            }}
          />
        </div>
      </div>
    );
  }
}
export default CounterContainer;
