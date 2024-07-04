import { servicesData } from '@/data/serviceData';
import { Service } from '@/components/Service';

const ServiceSection = () => {
  return (
    <section id="services" className=" py-24">
      <div className="container">
        {/* TITLE AND DESCRITPTION */}
        <div className="text-center pb-14 space-y-5">
          <h2 className="text-5xl font-bold">Our Special Services</h2>
          <p className="text-lg">
            TechWizard is a versatile technology partner offering a spectrum of specialized
            services. From Website Development to Mobile App Development, including AI Integration,
            Software Development and Game Development, we bring your digital vision to life. Our
            expertise extends to being a full-fledged Digital Agency, making us your one-stop
            solution for diverse tech needs. With innovation at the core of our operations, we
            deliver tailored, cutting-edge solutions to meet your unique requirements. Your digital
            journey begins and evolves with TechWizard.
          </p>
        </div>

        {/* SERVICES */}
        <ul className="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-[40px] gap-7">
          {servicesData?.map((item, i) => (
            // SERVICE ITEM
            <Service
              key={i}
              serviceDescription={item.serviceDescription}
              serviceImage={item.serviceImage}
              serviceName={item.serviceName}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
