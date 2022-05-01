import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderBanner from '../components/Elements/HeaderBanner';
import Header from '../components/Elements/Header';
import HeroSection from '../components/Elements/HeroSection';
import FeatureSection from '../components/Elements/FeatureSection';
import CtaSection from '../components/Elements/CtaSection';
import StackedLayout from '../components/Elements/StackedLayout';
import PageHeading from '../components/Elements/PageHeading';
import DescriptionList from '../components/Elements/DescriptionList';

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
      <br />
      <StackedLayout />
      <br />
      <PageHeading />
      <br />
      <DescriptionList />
    </>
  );
}

export default Home
