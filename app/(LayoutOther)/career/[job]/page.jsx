import SingleJob from '@/components/single-career';

const SingleJobPage = ({ params }) => {
  const jobName = params?.job;

  return (
    <>
      <SingleJob jobName={jobName} />
    </>
  );
};

export default SingleJobPage;
