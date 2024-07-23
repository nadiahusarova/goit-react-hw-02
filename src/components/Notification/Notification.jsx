import s from './Notification.module.css';

export function Notification({message}) {
  return (
    <section >
      <p >{message}</p>
    </section>
  );
}