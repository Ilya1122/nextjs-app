import Head from 'next/head';
import { NextPage } from 'next';
import ContactsSections from 'views/Contacts/ContactsSections';
import { WrapperFixedRow } from 'components/Wrappers';

const Contact: NextPage = () => (
  <>
    <Head>
      <title>honf.ru - контакты</title>
    </Head>
    <WrapperFixedRow spacesBootom={60} justify="space-between">
      <ContactsSections />
    </WrapperFixedRow>
  </>
);

export default Contact;
