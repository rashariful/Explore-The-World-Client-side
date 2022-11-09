import React from 'react';

const About = () => {
    return (
        <>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                 
                    <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
                        {/* <!-- content - start --> */}
                        <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
                            <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">About me</p>

                            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Hey there traveller. We know you want to see the world.</h1>

                            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">Where to begin? Do you want to see every single continent? Just one continent in great depth? Just one country in great depth? Travel is our favourite thing on the planet, but to plan a trip around the world involves many potential logistical headaches. That's why we make exploring the world easy, with food, accommodation and transport included in the cost of your trip.</p>

                            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                               

                                <a href="#" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">contact me</a>
                            </div>
                        </div>
                        {/* <!-- content - end -->

                        <!-- image - start --> */}
                        <div className="flex items-center xl:w-5/12 h-48 lg:h-auto overflow-hidden ">
                            <img src="https://media.istockphoto.com/id/1291682560/photo/young-couple-taking-break-from-sightseeing-for-selfie.jpg?b=1&s=170667a&w=0&k=20&c=xY6GkBrVLvuem6ghTEhaf82ZXN81l7kLU9ytEj9dWVo=" loading="lazy" alt="Photo by Fakurian Design" className="w-full h-auto rounded-lg object-cover object-center" />
                        </div>
                        {/* <!-- image - end --> */}
                    </section>
                </div>
            </div>
        
        </>
    );
};

export default About;