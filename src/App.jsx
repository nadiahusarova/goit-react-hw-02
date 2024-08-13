import { useState, useEffect } from 'react';
import './App.css';

import { Description } from './components/Descriptions/Descriptions';
import { Feedback } from './components/Feedback/Feedback';
import { Options } from './components/Options/Options';
import { Notification } from './components/Notification/Notification';

export default function App() {
  const [clicked, setClicked] = useState(() => {
    const savedClicked = localStorage.getItem('clicked');
    return savedClicked ? JSON.parse(savedClicked) : { good: 0, neutral: 0, bad: 0 };
  });

  const name = 'Sip Happens Café';
  const paragraph = 'Please leave your feedback about our service by selecting one of the options below';
  const message = 'No feedback yet';
  const totalFeedback = clicked.bad + clicked.good + clicked.neutral;
  const goodFeedback = Math.round((clicked.good / totalFeedback) * 100);

  const valueOption = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
  };

  function handleOnClick(type) {
    setClicked((prevState) => {
      const newState = {
        ...prevState,
        [type]: prevState[type] + 1,
      };
      localStorage.setItem('clicked', JSON.stringify(newState));
      return newState;
    });
  }

  function handleReset() {
    const resetState = { good: 0, neutral: 0, bad: 0 };
    setClicked(resetState);
    localStorage.setItem('clicked', JSON.stringify(resetState));
  }

  useEffect(() => {
    localStorage.setItem('clicked', JSON.stringify(clicked));
  }, [clicked]);

  return (
    <section>
      <Description name={name} paragraph={paragraph} />
      <Options
        valueOption={valueOption}
        handleReset={handleReset}
        handleOnClick={handleOnClick}
        totalFeedback={totalFeedback} 
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedBack={clicked}
          valueOption={valueOption}
          totalFeedback={totalFeedback}
          goodFeedback={goodFeedback}
        />
      ) : (
        <Notification message={message} />
      )}
    </section>
  );
}
