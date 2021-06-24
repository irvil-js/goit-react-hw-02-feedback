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

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <span className="FeedbackCounter_value">Good: {this.state.good}</span>
          <span className="FeedbackCounter_value">
            Neutral: {this.state.neutral}
          </span>
          <span className="FeedbackCounter_value">Bad: {this.state.bad}</span>
        </div>
      </div>
    );
  }
}

export default FeedbackCounter;
