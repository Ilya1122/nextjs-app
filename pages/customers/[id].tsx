import { NextPage } from 'next';
import Head from 'next/head';
import CustomerInfoSection from 'views/Customers/CustomerInfoSection';
import CustomerRatingSection from 'views/Customers/CustomerRatingSection';
import CustomerReviewSection from 'views/Customers/CustomerReviewSection';

const CustomerDetails: NextPage = () => (
  <>
    <Head>
      <title>honf.ru - Заказчик</title>
    </Head>

    <CustomerInfoSection />
    <CustomerRatingSection />
    <CustomerReviewSection title="Отзывы" />
  </>
);

export default CustomerDetails;
