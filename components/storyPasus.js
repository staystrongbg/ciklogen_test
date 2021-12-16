import styles from '../styles/story.module.css';

export const Pasus = (props) => {
  return (
    <div className={styles['story-text']}>
      {props.blockquote && (
        <div className={styles.blockquote}>
          <div className={styles.quotes}>&quot;</div>
          <div className={styles['divider-px']}></div>
          {props.blockquote}
        </div>
      )}
      <p>
        {props.dropcap && (
          <span className={styles.dropcap}>{props.dropcap.toUpperCase()}</span>
        )}
        {props.text}
      </p>
    </div>
  );
};
