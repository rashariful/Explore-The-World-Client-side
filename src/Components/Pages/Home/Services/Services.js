import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../Context/UserContext';
import Service from './Service/Service';

const Services = () => {
    const { setLoading, loading } = useContext(AuthContext)
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch(`https://server-nine-beta.vercel.app/service`)
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
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }


            </div>
            <div className='flex justify-center mb-10'>
                <Link to='/services'>
                    <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">See all</button>
                </Link>


            </div>

        </>
    );
};

export default Services;