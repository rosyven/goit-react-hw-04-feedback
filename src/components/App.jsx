import React from "react";
import { Section } from "./Feedback/Section";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Notification } from "./Feedback/Notification";
import { Statistics } from "./Feedback/Statistics";
import { useState } from "react";

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

   const handleFeedback = (type) => {
     setState((prevState) => ({
       ...prevState,
       [type]: prevState[type] + 1
     }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const { good, neutral, bad } = state;
  const total = countTotalFeedback();
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);
  
  return (
    <div>
      <Section>
        <FeedbackOptions
          options={Object.keys(state)}
          onClick={handleFeedback}
        />

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
          )}
      </Section>
    </div>
  );
}