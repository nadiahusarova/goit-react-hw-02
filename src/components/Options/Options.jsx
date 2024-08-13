import s from './Options.module.css';

export const Options = ({ 
  labels, 
  feedbackCounts, 
  handleReset, 
  handleOnClick 
}) => {
  const options = [
    { label: labels.good, onClick: () => handleOnClick('good') },
    { label: labels.neutral, onClick: () => handleOnClick('neutral') },
    { label: labels.bad, onClick: () => handleOnClick('bad') },
  ];

  return (
    <ul className={s.visual}>
      {options.map((option, index) => (
        <li key={index}>
          <button
            className={s.btnStyles}
            onClick={option.onClick}
            type="button"
          >
            {option.label}
          </button>
        </li>
      ))}
      {feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad > 0 && (
        <li>
          <button
            className={s.btnStyles}
            onClick={handleReset}
            type="button"
          >
            {labels.reset}
          </button>
        </li>
      )}
    </ul>
  );
};
