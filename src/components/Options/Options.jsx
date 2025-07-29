import css from "./Options.module.css";
import clsx from "clsx";
import { IoMdStar } from "react-icons/io";
import { IconContext } from "react-icons";

const feedbackOptions = [
  { type: "good", stars: 3 },
  { type: "neutral", stars: 2 },
  { type: "bad", stars: 1 },
];

const StarButton = ({ stars, onClick }) => (
  <button onClick={onClick} className={css.button}>
    <div>
      {Array.from({ length: stars }).map((_,i) => (
        <IoMdStar key={i} />
      ))}
    </div>
  </button>
);

function Options({ options, totalFeedback, resetFeedback }) {
  return (
    <div className={css["buttons-container"]}>
      <IconContext.Provider value={{ size: "14px", color: "#fcd068" }}>
        {feedbackOptions.map(({ type, stars }) => (
          <StarButton key={type} stars={stars} onClick={() => options(type)} />
        ))}

        <button
          onClick={resetFeedback}
          className={clsx(css.button, {
            [css.hidden]: !totalFeedback,
          })}
        >
          Reset
        </button>
      </IconContext.Provider>
    </div>
  );
}

export default Options;
