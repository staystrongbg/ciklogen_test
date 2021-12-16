import Head from 'next/head';
import styles from '../styles/home.module.css';
import data from '../data';
import fotke from '../fotke';
import Articles from '../components/Articles';
import Link from 'next/link';
import Meta from '../components/Meta';
// import Sablon from '../components/sablon';

export default function Home({ data, fotke }) {
  console.log(data, fotke);
  return (
    <>
      <Meta />
      {data.map((item, idx) => (
        <Articles item={item} key={idx} />
      ))}
    </>
  );
}
// <div className={`${styles.proslaveCL} ${styles.service}`}></div>;

export const getStaticProps = async () => {
  return {
    props: {
      data,
      fotke,
    },
  };
};
