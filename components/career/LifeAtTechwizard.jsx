import Image from 'next/image';
import Title from '@/components/common/Title';

const LifeAtTechwizard = ({ lifeAtTechWizardData }) => {
  return (
    <section id="life-at-techwizard" className="py-20 border-b border-solid border-gray-200">
      <div className="container">
        <Title
          title="At TechWizard, Collaboration is Key, and Every Employee is an Owner in Our Shared Success Story."
          subTitle="Life at TechWizard"
          primary={true}
        />

        {/* LIFE AT CPL */}
        <div>
          <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-12">
            {lifeAtTechWizardData?.map((item) => (
              <li key={item?.id}>
                <div>
                  {/* IMAGE */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    priority
                    className="w-full min-h-[300px] object-cover"
                  />
                </div>
                {/* CONTENTS */}
                <h3 className="text-2xl my-3 font-medium">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LifeAtTechwizard;
