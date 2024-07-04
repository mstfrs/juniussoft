import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';

import PortfolioItem from '../PortfolioItem';
import Title from '@/components/common/Title';

const RelatedPortfolios = ({ releatedPortfolios }) => {
  return (
    <section id="portfolio" className="pb-24">
      <div className="container relative">
        <Title
          subTitle="Related Portfolios"
          title="Explore Our Works"
          primary={true}
          titleBlack={false}
        />

        {/* RELATED PORTFOLIO  SLIDER */}
        <Swiper
          direction="horizontal"
          speed={1000}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1100: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          modules={[Autoplay, Keyboard]}
          className="mySwiper flex"
        >
          <ul className="flex gap-8">
            {releatedPortfolios?.map((item, i) => (
              // SLIDE ITEM
              <SwiperSlide key={i}>
                <PortfolioItem portfolio={item} primary={false} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </section>
  );
};

export default RelatedPortfolios;
