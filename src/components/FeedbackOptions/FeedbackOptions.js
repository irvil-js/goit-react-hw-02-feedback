import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionNames = Object.keys(options);

  return (
    <ul className={styles.btnList}>
      {optionNames.map((optionName) => (
        <li className={styles.item} key={optionName}>
          <button
            className={styles.button}
            name={optionName}
            onClick={onLeaveFeedback}
          >
            {optionName}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
