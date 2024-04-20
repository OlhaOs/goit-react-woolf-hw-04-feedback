import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedBackOption from './FeedBackOption/FeedBackOption';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedback;

  const handleClick = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return good ? Math.round((good * 100) / countTotalFeedback()) : 0;
  };

  const options = Object.keys(feedback);

  return (
    <>
      <Section title="Please, leave your feedback">
        <FeedBackOption options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            options={feedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback(" />
        )}
      </Section>
    </>
  );
};
