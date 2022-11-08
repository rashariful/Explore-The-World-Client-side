import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState ([])

    console.log(services);

    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServices(data.data)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
       <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 mb-20 mt-10 max-w-screen-2xl px-4 md:px-8 mx-auto">
                {
                    services?.slice(0, 3).map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }


            </div>
                <div className='flex justify-center mb-10'>
                <Link to='/allservices'>
                    <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View more</button>
                </Link>


                </div>

       </>
    );
};

export default Services;