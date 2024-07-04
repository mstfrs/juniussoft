import Image from 'next/image';

const JoinOurTeam = ({ joinDynamicTeamData }) => {
  return (
    <div>
      <ul className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
        {joinDynamicTeamData?.map((item) => (
          <li key={item.id} className="flex flex-col items-center text-center gap-3">
            {/* IMAGE */}
            <div>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="min-h-[250px] max-h-[250px] w-[250px] object-cover object-center mb-2 rounded-full border border-solid border-gray-300"
                priority
              />
            </div>

            {/* TITLE AND DESCRIPTIOn */}
            <h3 className="text-2xl font-medium">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinOurTeam;
