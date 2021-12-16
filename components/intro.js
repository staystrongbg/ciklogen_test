import styles from '../styles/story.module.css';
export const Intro = ({ intro }) => {
  return (
    <div className={styles.intro}>
      <p>{intro}</p>
    </div>
  );
};
