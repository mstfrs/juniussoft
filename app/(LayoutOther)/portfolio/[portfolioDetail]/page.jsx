import PortfolioDetail from '@/components/portfolio-details';

const PortfolioDetailPage = ({ params }) => {
  const portfolioName = params?.portfolioDetail;

  return (
    <>
      <PortfolioDetail portfolioName={portfolioName} />
    </>
  );
};

export default PortfolioDetailPage;
