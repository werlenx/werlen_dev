import styled from "styled-components"


const CarouselContainer = styled.div`
  
  .slick-slider {
    margin: 40px 0;

    .slick-list {
      padding: 5px;
    }

    .slick-track {
      display: flex;
      align-items: center;
    }

    .slick-slide {
      padding: 10px;
    }

    .slick-prev, .slick-next {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;

      &:before {
        font-size: 20px;
        color: white;
      }
    }

    .slick-dots {
      bottom: -30px;

      li {
        margin: 0 5px;

        button {
          &:before {
            font-size: 12px;
            color: black;
          }
        }

        &.slick-active {
          button:before {
            color: black;
          }
        }
      }
    }
  }
`;

const CarouselItem = styled.div`
  
  border-radius: 10px;

  img {
    width: 100%;
    height: 250px;
    /* object-fit: cover; */
    border-radius: 10px;
    border: 1px solid black;
    margin:0;
  }

  p {
    /* margin-top: 10px; */
    font-size: 1em;
    /* text-align: center; */
  
    
    
  }
`;

export { CarouselContainer, CarouselItem};