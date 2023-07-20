'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export function MainPageCarousel() {
  return (
    <div className="h-[30rem] overflow-hidden">
      <Carousel
        autoPlay
        dynamicHeight={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
      >
        <div>
          <img src="/assets/images/1.jpg" />
        </div>
        <div>
          <img src="/assets/images/2.jpg" />
        </div>
        <div>
          <img src="/assets/images/3.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
