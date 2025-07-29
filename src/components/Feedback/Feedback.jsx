import { BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiAngry } from "react-icons/bs";
import css from "./Feedback.module.css";

function Feedback({ feedback: { good, neutral, bad }, totalFeedback, positiveFeedback }) {
  return (
    <>
      <div className={css["emoji-container"]}>
        <div className={css["emoji-item"]}>
          <BsEmojiHeartEyes /> <p>{good}</p>
        </div>
        <div className={css["emoji-item"]}>
          <BsEmojiNeutral /> <p>{neutral}</p>
        </div>
        <div className={css["emoji-item"]}>
          <BsEmojiAngry /> <p>{bad}</p>
        </div>
      </div>

      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
}

export default Feedback;
