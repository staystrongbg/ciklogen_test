import { useRouter } from 'next/router';
import data from '../data';
import fotke from '../fotke';
import Header from '../components/Header';
import { Date } from '../components/date';
import { Intro } from '../components/intro';
import { Author } from '../components/author';
import { Pasus } from '../components/storyPasus';
import { Row } from '../components/imageRow';
import styles from '../styles/story.module.css';
import { useState } from 'react/cjs/react.development';
const Article = ({ item }) => {
  console.log(fotke);
  console.log(item);
  const [elementi, setElement] = useState({
    header: item[0],
    datum: item[0].datum,
    intro: item[0].intro,
    autor: item[0].autor,
  });
  return (
    <>
      <Header header={elementi.header} />
      <Date date={elementi.datum} />
      <div className={styles.story}>
        <Intro intro={elementi.intro} />
        <Author autor={elementi.autor} />
        {/* {content.map((item) => (
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
        ))} */}
      </div>
    </>
  );
};

export default Article;

export const getStaticProps = async (context) => {
  const item = data.filter((i) => i.url === context.params.url);
  return {
    props: {
      item,
    },
  };
};

export const getStaticPaths = async () => {
  const urls = data.map((item) => item.url);

  return {
    paths: urls.map((url) => {
      return {
        params: { url },
      };
    }),
    fallback: false,
  };
};
