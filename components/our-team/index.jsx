'use client';

import { teamsData } from '@/data/teamsData';
import Team from './Team';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import Loader from '@/components/common/Loader';
import useLoader from '@/hooks/useLoader';

const OurTeam = () => {
  const loading = useLoader();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Breadcrumb title="Our Team" />

      {/* TEAMS */}
      <div className="py-20">
        <div className="container">
          <ul className="grid xl:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {teamsData.map((team, i) => (
              <Team
                key={i}
                teamImg={team?.teamThumbnail}
                teamName={team?.teamName}
                slug={team?.teamSlug}
              />
            ))}
          </ul>
        </div>
      </div>
      {/* TEAMS */}
    </div>
  );
};

export default OurTeam;
