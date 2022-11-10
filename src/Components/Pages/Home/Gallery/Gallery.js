import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                Explore the Bangladesh
              </h2>

              <p className="max-w-screen-sm hidden md:block text-gray-500">
                Bangladesh officially the People's Republic of Bangladesh, is a
                country in South Asia. It is the eighth-most populous country in
                the world
              </p>
            </div>

            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              More
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://cdn.pixabay.com/photo/2018/03/20/14/00/sea-3243357__480.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Coxbazar Bangladesh
              </span>
            </a>
            {/* <!-- image - end -->

                        <!-- image - start --> */}
            <a
              href="#"
              className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.thedailystar.net/sites/default/files/feature/images/coxs-bazar-web_0.gif"
                loading="lazy"
                alt="Photo by Magicle"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Cox's bazar sea beach
              </span>
            </a>
            {/* <!-- image - end -->

                        <!-- image - start --> */}
            <a
              href="#"
              className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://bdsearcher.com/wp-content/uploads/2017/08/nilgiri-bandarban.jpg"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Bandarban tourist spot
              </span>
            </a>
            {/* <!-- image - end -->

                        <!-- image - start --> */}
            <a
              href="#"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://orientecotourism.com/wp-content/uploads/2018/01/Bandarban-one-day-tour2.jpg"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                bandarban Buddha Dhatu Jadi
              </span>
            </a>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
