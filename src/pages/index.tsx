import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderBanner from '../components/Elements/HeaderBanner';
import Header from '../components/Elements/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Componentes NextJS com Tailwind</title>
        <meta name="description" content="Componentes NextJS com Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <br />
      <HeaderBanner />
    </>
  );
}

export default Home
