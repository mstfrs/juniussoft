import SingleService from '@/components/single-service';

const SingleServicePage = ({ params }) => {
  const singleServiceName = params?.singleService;

  return (
    <>
      <SingleService singleServiceName={singleServiceName} />
    </>
  );
};

export default SingleServicePage;
