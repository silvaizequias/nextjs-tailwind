import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Elements/Banner';
import Header from '../components/Elements/Header';
import HeroSection from '../components/PageSections/HeroSection';
import FeatureSection from '../components/PageSections/FeatureSection';
import CtaSection from '../components/PageSections/CtaSection';
import StackedLayout from '../components/ApplicationShells/StackedLayout';
import PageHeading from '../components/Headings/PageHeading';
import DescriptionList from '../components/DataDisplay/DescriptionList';

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
      <Banner />
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
