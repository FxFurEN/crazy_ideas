import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ReservationModal from "./ReservationModal"; 
import { Button } from "antd";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundImages = [
    "../../public/img/1.png",
    "../../public/img/2.png",
    "../../public/img/3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [backgroundImages.length]);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <header
      className="h-screen bg-cover transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <div>
            <img src="../../public/img/logo.png" alt="Logo"/>
          </div>
          <nav className="hidden md:flex space-x-6 items-center pb-10" >
            <a href="#intro" className="text-white text-lg font-bold hover:text-gray-500">Главная</a>
            <a href="#about" className="text-white text-lg font-bold hover:text-gray-500">Обо мне</a>
            <a href="#price" className="text-white text-lg font-bold hover:text-gray-500">Услуги</a>
            <a href="#portfolio" className="text-white text-lg font-bold hover:text-gray-500">Портфолио</a>
            <Button type="text" className="flex pt-5 items-center" onClick={showModal}>
                <p className="text-white text-lg font-bold hover:text-gray-500 pb-4 pr-2">Контакты</p>
            </Button>
          </nav>
          <button className="md:hidden text-white text-2xl">
            <MenuOutlined />
          </button>
        </div>
        <div id ="intro" className="text-left mt-24 pl-20">
          <h1 className="text-4xl md:text-8xl font-bold text-white">CrazyIdeas</h1>
          <p className="mt-4 text-lg md:text-6xl text-white">Photographer</p>
        </div>
      </div>
      <ReservationModal visible={modalVisible} onCancel={handleCancel} />
    </header>
  );
};

export default Header;
