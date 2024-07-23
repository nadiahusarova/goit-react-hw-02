import s from './Descriptions.module.css';

export function Description({ name, paragraph }) {
  return (
    <div className={s.visual}>
      <h2>{name}</h2>
      <p>{paragraph}</p>
    </div>
  );
}