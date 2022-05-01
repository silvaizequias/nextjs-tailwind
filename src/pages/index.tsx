import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderBanner from '../components/Elements/HeaderBanner';
import Header from '../components/Elements/Header';
import HeroSection from '../components/Elements/HeroSection';
import FeatureSection from '../components/Elements/FeatureSection';
import CtaSection from '../components/Elements/CtaSection';

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
      <br />
      <HeroSection />
      <br />
      <FeatureSection />
      <br />
      <CtaSection />
    </>
  );
}

export default Home
