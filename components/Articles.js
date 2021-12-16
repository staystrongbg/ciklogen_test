import styles from '../styles/home.module.css';
import Link from 'next/link';

const Articles = ({ item }) => {
  const { css_class, heading, url, text, photos } = item;
  return (
    <div
      style={{
        backgroundImage: !css_class && `url(${photos[0].src})`,
      }}
      className={`${styles['bg-image']} ${styles.sepia} ${
        styles[css_class && css_class]
      }`}
    >
      <div className={styles['bg-text']}>
        <h3 className={styles['heading']}>{heading}</h3>
        <p className={styles['desc']}>{text}</p>
      </div>
      <div>
        <Link href={`/${url}`}>
          <a>
            <button className={styles['read-more']}>Read more</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Articles;
