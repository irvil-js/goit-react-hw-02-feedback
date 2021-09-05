import React from "react";
// import styles from "./Feedback.module.css";

class FeedbackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  // handleIncrementBad = () => {
  //   this.setState((prevState) => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  // handleIncrementNeutral = () => {
  //   this.setState((prevState) => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // SumFeedback = () => {
  //   this.setState((prevState) => ({
  //     total: prevState.good + prevState.neutral + prevState.bad,
  //   }));
  // };

  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.handleIncrement}>
            {this.props.name}
          </button>
          {/* <button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad
          </button> */}
        </div>
        {/* <h2>Statistics</h2> */}
        <div>
          <span className="FeedbackCounter_value">
            {this.props.name}: {this.state.good}
          </span>
          {/* <span className="FeedbackCounter_value">
            Neutral: {this.state.neutral}
          </span>
          <span className="FeedbackCounter_value">Bad: {this.state.bad}</span> */}
          {/* <span className="FeedbackTotal" onChange={this.SumFeedback}>
            Total:{" "} */}
          {/* </span> */}
        </div>
      </div>
    );
  }
}

export default FeedbackCounter;
