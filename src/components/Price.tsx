import React, { useState, useEffect } from "react";
import { Carousel, Card } from "antd";

const { Meta } = Card;

const Price = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); 
      } else {
        setSlidesToShow(3); 
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      imgSrc: "../../img/polnaya.jpg",
      title: "Фотоссессия в полной комплектации от нас",
      price: 10000,
    },
    {
      imgSrc: "../../img/vash.jpg",
      title: "Фотоссессия на ваш выбор",
      price: 4500,
    },
    {
      imgSrc: "../../img/fotozona.jpg",
      title: "Фотоссессия с фотозоной",
      price: 7000,
    },
    {
      imgSrc: "../../img/studio.jpg",
      title: "Фотоссессия в фотостудии",
      price: 15000,
    },
    {
      imgSrc: "../../img/semeynaya.jpg",
      title: "Семейная Фотоссессия",
      price: 3000,
    },
    {
      imgSrc: "../../img/povsednevnaya (1).jpg",
      title: "Повседневная фотоссесия",
      price: 5500,
    },
  ];

  const renderServiceCard = (service, index) => (
    <div key={index}>
      <Card
        hoverable
        style={{ width: 400 }}
        cover={<img alt={service.title} src={service.imgSrc} />}
      >
        <Meta title={service.title} description={`Цена: ${service.price} тг`} />
      </Card>
    </div>
  );

  const carouselItems = services.map((service, index) =>
    renderServiceCard(service, index)
  );

  return (
    <section id="price" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Услуги
        </h2>
        <div className="mt-8 pl-20">
          <Carousel slidesToShow={slidesToShow} autoplay autoplaySpeed={3000} infinite>
            {carouselItems}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Price;
