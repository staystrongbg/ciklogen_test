import { useRouter } from 'next/router';
import { useState } from 'react';
import data from '../data';
import Header from '../components/Header';
import { Date } from '../components/date';
import { Intro } from '../components/intro';
import { Author } from '../components/author';
import { Pasus } from '../components/storyPasus';
import { Row } from '../components/imageRow';
import styles from '../styles/story.module.css';
const Sablon = ({ content }) => {
  const [loc] = useState(useRouter().pathname);
  const [info] = useState(data.filter((item) => item.url === loc));
  const [elementi] = useState({
    header: info[0],
    datum: info[0].datum,
    intro: info[0].intro,
    autor: info[0].autor,
  });

  return (
    <>
      <Header header={elementi.header} />
      <Date date={elementi.datum} />
      <div className={styles.story}>
        <Intro intro={elementi.intro} />
        <Author autor={elementi.autor} />
        {content.map((item) => (
          <div key={item.id}>
            <Pasus
              text={item.text}
              dropcap={item.dropcap && item.dropcap}
              blockquote={item.blockquote && item.blockquote}
            />
            <Row
              column={item.column && item.column}
              image={item.image && item.image}
              image1={item.image1 && item.image1}
              image2={item.image2 && item.image2}
              image3={item.image3 && item.image3}
              image4={item.image4 && item.image4}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Sablon;
