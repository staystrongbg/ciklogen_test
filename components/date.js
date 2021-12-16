import { FaCalendarWeek } from 'react-icons/fa';
import styles from '../styles/story.module.css';

export const Date = ({ date }) => (
  <div className={styles.date}>
    <FaCalendarWeek />
    <span>{date}</span>
  </div>
);
