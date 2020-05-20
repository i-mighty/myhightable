import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import Footer from '@src/components/IntroSlider/Footer/Footer';
import DetailsPage, { PageProp } from '@src/components/IntroSlider/DetailsPage/DetailsPage';

const IntroContainer: React.FC = () => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0);

  const skipAction = () => {
    setSwiperIndex(4);
  };

  const pages: PageProp[] = [
    {
      background: require('@src/assets/Intro/cafe.jpg'),
      isBanner: true,
    },
    {
      caption: 'Discover',
      background: require('@src/assets/Intro/discover.jpg'),
      description: 'Find top rated hospitality\ncentres in your city',
      skipAction,
    },
    {
      caption: 'Experience',
      background: require('@src/assets/Intro/experience.jpg'),
      description: 'Enjoy first class customer service\nfor all bookings',
      skipAction,
    },
    {
      caption: 'Tribe',
      background: require('@src/assets/Intro/tribe.jpg'),
      description:
        'Find people with similar interests,\ncreate memories, share experiences',
      skipAction,
    },
    {
      caption: 'Disruptively Affordable',
      background: require('@src/assets/Intro/affordable.jpg'),
      description: 'Get the best possible\nvalue at your current budget',
      withAuth: true,
    },
  ];

  const renderPages = (data: PageProp[]) => {
    let pages = data.map((item) => {
      return <DetailsPage {...item} />;
    });

    return pages;
  };

  const renderPagination = (index: number) => {
    return <Footer currentSlide={index} />;
  };

  return (
    <Swiper
      index={swiperIndex}
      loop={false}
      showsButtons={false}
      renderPagination={renderPagination}>
      {renderPages(pages)}
    </Swiper>
  );
};
export default IntroContainer;
