import Lottie from 'lottie-react';
import RocketJson from '@/public/assets/lottie-files/rocket.json';
import TargetJson from '@/public/assets/lottie-files/target.json';
import Reveal from '@/components/common/ScrollAnimation';

const OurMisson = ({ item, index }) => {
  const lottieStyle = {
    height: 300,
    width: 300,
  };

  return (
    <li className="flex flex-col items-center text-center group">
      <Reveal from={300}>
        <div className="text-8xl text-primary md:border-r-4 border-r-0 border-gray-300 border-solid group-last:border-0 w-full flex justify-center">
          {(index === 1 && (
            <Lottie
              animationData={RocketJson}
              loop={true}
              style={lottieStyle}
              className="scale-[1.8]"
            />
          )) ||
            (index === 0 && <Lottie animationData={TargetJson} loop={true} style={lottieStyle} />)}
        </div>

        <h2 className="text-4xl font-bold uppercase mt-10 mb-6">
          {item?.aboutTitle?.split(' ')[0]}{' '}
          <span className="text-primary">{item?.aboutTitle?.split(' ')[1]}</span>
        </h2>

        <p className="text-lg md:line-clamp-4 lg:px-12 px-8">{item?.aboutDescription}</p>
      </Reveal>
    </li>
  );
};

export default OurMisson;
