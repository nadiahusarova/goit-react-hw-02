import s from './Feedback.module.css';

export function Feedback({
  totalFeedback,
  goodFeedback,
  feedBack: { good, neutral, bad },
}) {
  const feedbackData = [
    { label: 'good', value: good },
    { label: 'neutral', value: neutral },
    { label: 'bad', value: bad },
    { label: 'totalFeedback', value: totalFeedback },
    { label: 'positive', value: `${goodFeedback}%` }
  ];

  return (
    <>
      <ul className={s.visual}>
        {feedbackData.map((item, index) => (
          <li key={index}>{item.label}:{item.value}</li>
        ))}
      </ul>
    </>
  );
}
