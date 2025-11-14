// import React from 'react'
// import {Link} from 'react-router-dom'
// import './Banner.css'

// const Banner = () => {
//   return (
//     <div className="banner_section">
//       <img src="\images\banners\2.webp" alt="image" />
//     </div>
    
//   )
// }

// export default Banner


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner_section">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        swipeable
        emulateTouch
        stopOnHover={false}  // ✅ keeps autoplay active on hover
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className="arrow-btn arrow-left"
              aria-label="Previous Slide"
            >
              &#10094;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className="arrow-btn arrow-right"
              aria-label="Next Slide"
            >
              &#10095;
            </button>
          )
        }
      >
        <div>
          <img src="\images\banners\1.webp" alt="Banner 1" />
        </div>
        <div>
          <img src="\images\banners\2.webp" alt="Banner 2" />
        </div>
        <div>
          <img src="\images\banners\3.webp" alt="Banner 3" />
        </div>
        <div>
          <img src="\images\banners\4.webp" alt="Banner 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;


