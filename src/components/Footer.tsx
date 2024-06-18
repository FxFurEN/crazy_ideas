import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-6">
      <div className="container mx-auto px-6 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0 lg:w-full">
            <div className="iframe-container rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.814513540744!2d51.36841791224259!3d51.20406943269944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4171baff57992f43%3A0x49f7f180d4497b62!2z0J_Qu9C-0YnQsNC00Ywg0JDQsdCw0Y8sIDA5MDAwMCDQo9GA0LDQu9GM0YHQuiwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2sus!4v1718733283119!5m2!1sru!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-5">
          <a
            href="https://vk.com/meownpz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-orange-500"
          >
            <img src="img/image 3.png" alt="vk" />
          </a>
          <a
            href="https://www.instagram.com/ph.meownpz?igsh=MWd2a3ViaW12anFzZw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-orange-500"
          >
            <img src="img/instagram.png" alt="instagram" />
          </a>
          <a
            href="https://t.me/meownpz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-orange-500"
          >
            <img src="img/image 4.png" alt="telegram" />
          </a>
        </div>
        <p className="text-gray-400 text-center mt-5">
          Все права защищены, 2024г.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
