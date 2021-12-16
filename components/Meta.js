import Head from 'next/head';
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <title>C I K L O G E N - {title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: 'C I K L O G E N',
  keywords: 'Spustamo se da bismo se peli',
  description: 'bicikle i priroda',
};
export default Meta;
