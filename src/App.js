import React from "react";
import FeedbackCounter from "./components/Feedback/Feedback";

const App = () => (
  <>
    <div>
      <h1>Please leave feedback</h1>
    </div>
    <FeedbackCounter name="Good" />
    <FeedbackCounter name="Neutral" />
    <FeedbackCounter name="Bad" />
    <div>
      <h2>Statistics</h2>
    </div>
  </>
);

export default App;
