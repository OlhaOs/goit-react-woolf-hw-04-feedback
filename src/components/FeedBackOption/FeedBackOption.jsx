import css from './FeedBackOption.module.css';
import { nanoid } from 'nanoid';

const FeedBackOption = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={nanoid()}
            type="button"
            className={css.optionBtn}
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};
export default FeedBackOption;
