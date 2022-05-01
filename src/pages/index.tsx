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
import FormLayout from '../components/Forms/FormLayout';
import InputGroup from '../components/Forms/InputGroup';
import SelectMenu from '../components/Forms/SelectMenu';
import SignInAndRegistration from '../components/Forms/SignInAndRegistration';
import Navbar from '../components/Navigation/Navbar';
import Pagination from '../components/Navigation/Pagination';
import Modal from '../components/Overlays/Modal';
import SlideOver from '../components/Overlays/SlideOver';
import Avatar from '../components/Elements/Avatar';
import Dropdown from '../components/Elements/Dropdown';

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
      <br />
      <FormLayout />
      <br />
      <InputGroup />
      <br />
      <SelectMenu />
      <br />
      <SignInAndRegistration />
      <br />
      <Navbar />
      <br />
      <Pagination />
      <br />
      <Modal />
      <br />
      <SlideOver />
      <br />
      <Avatar />
      <br />
      <Dropdown />
    </>
  );
}

export default Home
