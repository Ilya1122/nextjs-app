import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import FreelancerInfoSections from 'views/FreelancerDetails/FreelancerInfoSections';
import FreelancerRatingSections from 'views/FreelancerDetails/FreelancerRatingSections';
import FreelancerPortfolioSections from 'views/FreelancerDetails/FreelancerPortfolioSections';

import { API } from 'services/api';
import { IFreelancer } from 'interfaces/freelancer';

interface IParams extends ParsedUrlQuery {
  freelancerId: string
}

interface Props {
  freelancer: IFreelancer;
}

const FreelancerDetails: NextPage<Props> = ({ freelancer }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{freelancer.firstName}{' '}{freelancer.lastName}</title>
    </Head>

    <FreelancerInfoSections
      firstName={freelancer.firstName}
      lastName={freelancer.lastName}
      photoUrl={freelancer.photoUrl}
      freelancerId={freelancer.id}
      description={freelancer.description}
    />

    <FreelancerRatingSections />

    <FreelancerPortfolioSections title="Портфолио" />

    <FreelancerPortfolioSections title="Отзывы" height={383} isReviewsList />
  </>
);

export default FreelancerDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { freelancerId } = context.query as IParams;
  const { data } = await API.get<IFreelancer>(`/freelancers/${freelancerId}`);

  return {
    props: {
      freelancer: data,
    },
  };
};
