import React from "react";
import { Section } from "./Feedback/Section";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Notification } from "./Feedback/Notification";
import { Statistics } from "./Feedback/Statistics";
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

   const handleFeedback = (type) => {
    switch (type) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);
  
  return (
    <div>
      <Section>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
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