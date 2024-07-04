import Job from './Job';
import Title from '@/components/common/Title';

const Jobs = ({ jobData }) => {
  return (
    <section id="jobs" className="py-20 scroll-mt-10">
      <div className="container">
        <Title
          title="Join Our world-class team of creators & dreamers"
          subTitle="Discover Exciting Opportunities to Shape the Future"
          primary={true}
        />

        {/* JOBS */}
        {jobData?.length !== 0 ? (
          <ul className="flex flex-col gap-8">
            {jobData?.map((job) => (
              <Job
                key={job.id}
                title={job?.title}
                description={job?.description}
                location={job?.location}
                employmentType={job?.employmentType}
                department={job?.department}
              />
            ))}
          </ul>
        ) : (
          <h2 className="text-[32px] font-semibold text-center p-12 text-black border-2 border-solid border-red-500">
            Thank you for your interest, but there are no job openings available at this time.
            Please check back at another time!
          </h2>
        )}
      </div>
    </section>
  );
};

export default Jobs;
