import s from './Options.module.css';

export const Options = ({ 
  valueOption, 
  handleReset, 
  handleOnClick, 
  totalFeedback 
}) => {
  const options = [
    { label: valueOption.good, onClick: () => handleOnClick('good') },
    { label: valueOption.neutral, onClick: () => handleOnClick('neutral') },
    { label: valueOption.bad, onClick: () => handleOnClick('bad') },
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
      {totalFeedback > 0 && (
        <li>
          <button
            className={s.btnStyles}
            onClick={handleReset}
            type="button"
          >
            {valueOption.reset}
          </button>
        </li>
      )}
    </ul>
  );
};
