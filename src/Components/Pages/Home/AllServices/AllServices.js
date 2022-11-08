import React, { useEffect, useState } from 'react';
import Service from '../Services/Service/Service';

const AllServices = () => {
    const [services, setServices] = useState([])
    console.log(services);

    useEffect(() => {
        fetch('http://localhost:5000/service')
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
        <div className='w-[60%] mx-auto'>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 mb-20 mt-10 max-w-screen-2xl px-4 md:px-8 mx-auto">
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default AllServices;