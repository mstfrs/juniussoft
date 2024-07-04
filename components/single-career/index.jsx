'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

import Loader from '@/components/common/Loader';
import Title from '@/components/common/Title';
import { Breadcrumb } from '@/components/common/Breadcrumb';

import { careerData } from '@/data/careerData';
import JobInformation from './JobInformation';
import useLoader from '@/hooks/useLoader';
import JobSummery from './JobSummery';
import JoinOurTeam from './JoinOurTeam';

const SingleJob = ({ jobName }) => {
  const loading = useLoader();
  const jobData = careerData?.jobs;
  const joinDynamicTeamData = careerData?.dynamicTeam;

  const [currentJob, setCurrentJob] = useState({});

  useEffect(() => {
    const job = jobData?.find(
      (job) => job?.title?.toLowerCase() === jobName?.split('-')?.join(' ')
    );
    setCurrentJob(job);
  }, [jobData, jobName]);

  if (loading) {
    return <Loader />;
  }

  if (!currentJob) {
    return notFound();
  }

  return (
    <div>
      <Breadcrumb title={jobName?.split('-')?.join(' ')} />

      <div className="py-20">
        <div className="container flex md:flex-row flex-col gap-10">
          <JobInformation currentJob={currentJob} />
          <JobSummery currentJob={currentJob} />
        </div>
      </div>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Title
              title="How to Join Our Dynamic Team"
              subTitle="Become a part of the TechWizard. through our Multi-step hiring process."
              titleBlack={true}
              classNames="flex-col-reverse"
            />
          </div>
          <JoinOurTeam joinDynamicTeamData={joinDynamicTeamData} />
        </div>
      </section>
    </div>
  );
};

export default SingleJob;
