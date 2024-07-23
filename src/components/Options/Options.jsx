import s from './Options.module.css';

export const Options = ({ 
  valueOption, 
  handleReset, 
  handleOnClick 
}) => {
  const options = [
    { label: valueOption.good, onClick: () => handleOnClick('good') },
    { label: valueOption.neutral, onClick: () => handleOnClick('neutral') },
    { label: valueOption.bad, onClick: () => handleOnClick('bad') },
    { label: valueOption.reset, onClick: handleReset }
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
    </ul>
  );
};
