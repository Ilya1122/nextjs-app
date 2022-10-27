import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { IBestFreelancer } from 'interfaces/best-freelancer';
import MainTitleSection from 'views/Main/MainTitleSection';
import MainTopPerformersSection from 'views/Main/MainTopPerformersSection';
import MainPlatformSection from 'views/Main/MainPlatformSection';
import MainSliderSection from 'views/Main/MainSliderSection';
import { API } from 'services/api';

interface Props {
  freelancers: IBestFreelancer[]
}

const Home: NextPage<Props> = ({ freelancers = [] }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>honf.ru - фриланс платформа</title>
    </Head>

    <MainTitleSection />
    <MainTopPerformersSection
      freelancers={freelancers}
    />
    <MainPlatformSection />
    <MainSliderSection />
  </>
);

export default Home;
