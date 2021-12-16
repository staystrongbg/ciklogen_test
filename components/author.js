import styles from '../styles/story.module.css';
export const Author = ({ autor }) => {
  return (
    <div className={styles['story-text']}>
      <span className={styles.author}>{autor}</span>
    </div>
  );
};
