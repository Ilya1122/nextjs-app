import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(39, 71, 101, 0.06);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(39, 71, 101, 0.2);
      border-radius: 20px;
    }
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  html, body, #__next {
    height: 100%;
    font-family: 'PT Sans', sans-serif;
  }

  #__next {
    height: 100vh;
    overflow: hidden;
  }

  .mySwiper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 167px;
    position: relative;
    display: flex;
    @media (max-width: 1200px) {
      padding-bottom: 114px;
    }

    @media (max-width: 991px) {
      padding-bottom: 70px;
    }
  }

  .swiperPortfolio {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 167px;
    position: relative;
    display: flex;
    padding-bottom: 0;
    height: fit-content;
  }

  .swiper-slide {
    width: fit-content;
    height: 100%;
    border-radius: 14px;
  }

  .swiper-button-next::after {
    display: none;
  }

  .swiper-button-prev::after {
    display: none;
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background: #bdc0c7;
  }

  .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 110px;
    @media (max-width: 1200px) {
      bottom: 60px;
    }

    @media (max-width: 991px) {
      bottom: 30px;
    }
  }

  .swiper-pagination-bullet-active {
    background: #274765;
    width: 20px;
    height: 20px;
  }
`;
