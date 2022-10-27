import Head from 'next/head';
import { NextPage } from 'next';
import AbutUsTopSection from 'views/AboutUs/AbutUsTopSection';
import AboutUsPlatformAdvantages from 'views/AboutUs/AboutUsPlatformAdvantages';
import AboutUsContactSection from 'views/AboutUs/AboutUsContactSection';
import { platformCustomers, platformFreelancers } from 'views/AboutUs/constants';

const Contact: NextPage = () => (
  <>
    <Head>
      <title>honf.ru - про нас</title>
    </Head>

    <AbutUsTopSection />

    <AboutUsPlatformAdvantages
      background="#FAFBFD"
      platformCustomers={platformCustomers}
      title="Преимущества платформы для заказчиков"
      image="/images/platformMenImage.svg"
      imageMobile="/images/aboutUsManImage.svg"
    />

    <AboutUsPlatformAdvantages
      platformCustomers={platformFreelancers}
      title="Преимущества платформы для фрилансеров"
      reverse="row-reverse"
      widthitemtext={340}
      image="/images/womanImagePlatform.svg"
      imageMobile="/images/aboutUsWoman.svg"
    />

    <AboutUsContactSection />
  </>
);

export default Contact;
