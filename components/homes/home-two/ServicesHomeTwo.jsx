import Button from '@/components/Button';
import { Service } from '@/components/Service';
import Title from '@/components/common/Title';
import { servicesData } from '@/data/serviceData';

const ServicesHomeTwo = () => {
  return (
    <section id="services" className="scroll-mt-28 py-24">
      <div className="container">
        <div className="flex justify-between items-center gap-8">
          {/* TITLE */}
          <Title
            subTitle="Discover Our Solutions for Smooth Operations"
            title="Elevating IT Solutions for Seamless Operations"
            primary={true}
            classNames="text-left justify-start items-start mb-0"
          />
          {/* MORE BUTTON */}
          <div className="hidden lg:block">
            <Button text="Explore Services" link="/services" />
          </div>
        </div>

        {/* SERVICES */}
        <ul className="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-7 mt-14">
          {servicesData?.slice(0, 6)?.map((item, i) => (
            // SERVICE ITEM
            <Service
              key={i}
              serviceDescription={item.serviceDescription}
              serviceImage={item.serviceImage}
              serviceName={item.serviceName}
              leftAlign={true}
            />
          ))}
        </ul>

        {/* IT WILL DISPLAY ON TAB AND MOBILE SCREEN */}
        <div className="flex lg:hidden justify-center mt-10">
          <Button text="Explore Services" link="/services" />
        </div>
      </div>
    </section>
  );
};

export default ServicesHomeTwo;
