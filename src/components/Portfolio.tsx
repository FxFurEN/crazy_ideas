import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const Portfolio = () => {
  const services = [
    {
      imgSrc: "../../img/plenka1.jpg",
    },
    {
      imgSrc: "../../img/plenka2.jpg",
    },
    {
      imgSrc: "../../img/plenka3.jpg",
    }
  ];

  const renderServiceCard = (service, index) => (
    <div key={index} className="portfolio-card">
      <Card
        hoverable
        style={{ width: 400, marginBottom: 20 }}
        cover={<img alt={`Work ${index}`} src={service.imgSrc} />}
      >
      </Card>
    </div>
  );

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Мои работы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pl-20">
          {services.map((service, index) => renderServiceCard(service, index))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
