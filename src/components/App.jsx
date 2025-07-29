import { useEffect, useState } from "react";
import "./App.css";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";
import Notification from "./Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const fb = window.localStorage.getItem("feedback");
    if (fb !== null) return JSON.parse(fb);

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  }

  function resetFeedback() {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.removeItem("feedback");
  }

  return (
    <>
      <Description />
      <Options
        options={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
