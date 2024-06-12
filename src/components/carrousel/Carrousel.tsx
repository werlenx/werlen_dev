
import Slider from "react-slick";
import { CarouselContainer, CarouselItem} from "./CarrouselStyle";

export default function Carrousel() {
  const certifications = [
    { name: "Em breve", image: "certificado.png" },
    { name: "Em breve", image: "certificado.png" },
    { name: "Em breve", image: "certificado.png" },
    // Adicione mais certificações conforme necessário
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
  
      <div className="container">
        <h2>Certificações</h2>
        <CarouselContainer>
          <Slider {...settings}>
            {certifications.map((certification, index) => (
              <CarouselItem key={index}>
                <img src={certification.image} alt={certification.name} />
                <p>{certification.name}</p>
              </CarouselItem>
            ))}
          </Slider>
        </CarouselContainer>
      </div>

  );
}
