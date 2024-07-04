import Title from '@/components/common/Title';
import { servicesData } from '@/data/serviceData';
import Button from '@/components/Button';
import { Service } from '@/components/Service';

const ServicesSection = () => {
  return (
    <section id="services-one" className="scroll-mt-28  py-24">
      {/* SERVICE SECTION START */}
      <div className="container ">
        <Title
          subTitle="Creative Services"
          title="Our Services"
          primary={true}
          titleBlack={false}
        />

        {/* SERVICES */}
        <ul className="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-7">
          {servicesData.slice(0, 6)?.map((item, i) => (
            <Service
              key={i}
              serviceDescription={item.serviceDescription}
              serviceImage={item.serviceImage}
              serviceName={item.serviceName}
              leftAlign={false}
            />
          ))}
        </ul>

        {/* MORE BUTTON */}
        <div className="flex justify-center mt-10">
          <Button text="EXPLORE MORE SERVICE" link="/services" />
        </div>
      </div>
      {/* SERVICE SECTION End */}
    </section>
  );
};

export default ServicesSection;
