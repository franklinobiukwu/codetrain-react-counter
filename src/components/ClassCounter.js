import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  // function to decrease count value
  handleDecrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  // function to increase count value
  handleIncrease = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <div>
        <h1 className="text-lg text-center mt-20 mb-2 text-slate-600 font-serif">
          Simple Counter
        </h1>
        <div className="w-36 m-auto bg-slate-300 p-4 rounded-xl border border-slate-400">
          <div className="bg-slate-50 px-1 pl-2 rounded-xl">
            {this.state.number}
          </div>
          <div className="flex justify-between">
            <button
              className="py-2 px-4 bg-slate-400 mt-4 border border-slate-200 rounded-xl text-2xl w-3 min-w-min"
              type="button"
              onClick={this.handleDecrease}
            >
              -
            </button>
            <button
              className="py-2 px-4 bg-slate-400 mt-4 border border-slate-200 rounded-xl text-2xl w-3 min-w-min"
              type="button"
              onClick={this.handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
