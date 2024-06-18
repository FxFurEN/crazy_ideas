
const About = () => {
  return (
    <section id="about" className="my-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          
          <div className="lg:flex lg:items-center lg:justify-between mt-8">
            <div className="hidden lg:block lg:w-1/3 lg:ml-8 pr-5">
              <img src="img/000+.jpg" alt="я :)" className="rounded-lg w-full shadow-lg" />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold ">Немного обо мне</h2>
              <p className="text-gray-600 mt-4 text-left lg:text-xl">Меня зовут Хобор Анастасия.
                Я начинающий фотограф, из города Уральск.
                На данный момент заканчиваю "Уральский Колледж Информационных технологий".
                Будучи подростком я мечтала заниматься фотографированием, работать с людьми, уметь подбирать цветовые композиции.
                И в 2023 году я вступаю в творческую команду
                "Безумные Идеи". На протяжении полугода мы занимались тематическими фотосессиями.
                Из подручных материалов делали конфетку.
                Старались вкладывать свои идеи так,
                чтобы люди поняли суть нашей идеи.
                На данный момент я работаю одна,
                набираю портфолио для дальнейшей работы с людьми.</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
