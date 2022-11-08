import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
          <section>
                <div className='w-[60%] mx-auto'>
                    <div className="mb-20">
                        <div classNameName="bg-white py-6 sm:py-8 lg:py-12">
                            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                                <div className="mb-10 md:mb-16">
                                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mt-10 mb-4 md:mb-6">
                                        Explore The JWT, SQL, Node js, and more
                                    </h2>

                                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center  mx-auto">
                                        Difference between SQL and NoSQL
                                        What is JWT, and how does it work?
                                        What is the difference between javascript and NodeJS?
                                        How does NodeJS handle multiple requests at the same time?
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">

                                    <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                                        <a
                                            href="#"
                                            className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
                                        >
                                            <img
                                                src="https://techgeekbuzz.com/media/post_images/uploads/2021/11/SQL-vs-NoSQL.jpg"
                                                loading="lazy"
                                                alt="Photo by Minh Pham"
                                                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                            />
                                        </a>

                                        <div className="flex flex-col flex-1 p-4 sm:p-6">
                                            <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                                >
                                                    Difference between SQL and NoSQL
                                                </a>
                                            </h2>

                                            <p className="text-gray-500 mb-8">
                                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                                        <a
                                            href="#"
                                            className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
                                        >
                                            <img
                                                src="https://www.appknox.com/hs-fs/hubfs/JWT.jpg?width=1999&name=JWT.jpg"
                                                loading="lazy"
                                                alt="Photo by Magicle"
                                                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                            />
                                        </a>

                                        <div className="flex flex-col flex-1 p-4 sm:p-6">
                                            <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                                >
                                                    What is JWT, and how does it work?
                                                </a>
                                            </h2>

                                            <p className="text-gray-500 mb-8">
                                                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                                        <a
                                            href="#"
                                            className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
                                        >
                                            <img
                                                src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg"
                                                loading="lazy"
                                                alt="Photo by Martin Sanchez"
                                                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                            />
                                        </a>

                                        <div className="flex flex-col flex-1 p-4 sm:p-6">
                                            <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                                >
                                                    What is the difference between javascript and Node JS?
                                                </a>
                                            </h2>

                                            <p className="text-gray-500 mb-8">
                                                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                                        <a
                                            href="#"
                                            className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
                                        >
                                            <img
                                                src="https://res.cloudinary.com/practicaldev/image/fetch/s--SV2CrLU5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/2euqwipkatw4w5ar6twx.png"
                                                loading="lazy"
                                                alt="Photo by Martin Sanchez"
                                                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                            />
                                        </a>

                                        <div className="flex flex-col flex-1 p-4 sm:p-6">
                                            <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                                <a
                                                    href="#"
                                                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                                >
                                                    How does node js handle multiple requests
                                                </a>
                                            </h2>

                                            <p className="text-gray-500 mb-8">
                                                How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </section>

        </>
    );
};

export default Blog;