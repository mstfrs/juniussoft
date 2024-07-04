import Button from '@/components/Button';

const HeroCareer = () => {
  return (
    <section className="min-h-[80vh] grid place-items-center pt-[100px] relative careerHero">
      {/* CAREER HERO SECTION */}
      <div className="container h-full grid place-items-center py-40 relative z-10 text-white">
        {/* CONTENTS */}
        <div className="max-w-[850px] text-center">
          <h1 className="md:text-5xl text-3xl font-bold tracking-wider">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Let's Fulfill Dreams Together
          </h1>
          <p className="md:text-2xl text-xl mt-5">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            We're out to transform the way entrepreneurs build their brands and provide value to the
            world - One task at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mt-12 justify-center">
            <Button link="#jobs" text="Current Job" primary={true} className="tracking-wider" />
            <Button
              link="#life-at-techwizard"
              text="Life at TechWizard"
              primary={false}
              className="tracking-wider"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCareer;
