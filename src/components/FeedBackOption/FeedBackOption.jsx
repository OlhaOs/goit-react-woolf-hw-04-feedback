import css from './FeedBackOption.module.css';

const FeedBackOption = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={css.optionBtn}
            onClick={() => onLeaveFeedback(option)}
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
