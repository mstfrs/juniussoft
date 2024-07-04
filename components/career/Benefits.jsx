import Image from 'next/image';
import Title from '@/components/common/Title';

const Benefits = ({ benefitsData }) => {
  return (
    <section id="benefits" className="benefits py-20">
      <div className="container">
        <Title
          title="Why you should join our Awesome Team"
          subTitle="Perks & Benefits"
          primary={false}
        />

        {/* CAREER BENEFITS */}
        <div>
          <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
            {benefitsData?.map((benefit) => (
              // BENEFIT
              <li
                key={benefit?.id}
                className="flex items-center gap-3 p-6 rounded-md bg-gray-800 bg-opacity-70 backdrop-blur-md border border-glass shadow-sm text-xl text-gray-50"
              >
                <Image src={benefit?.icon} width={40} height={40} alt={benefit?.text} />
                <p>{benefit?.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
