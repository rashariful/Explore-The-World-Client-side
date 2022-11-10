import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/UserContext';
import Service from '../Services/Service/Service';

const AllServices = () => {
    const [services, setServices] = useState([])
    const { setLoading } = useContext(AuthContext)


    useEffect(() => {
        fetch('https://server-nine-beta.vercel.app/service?route=home')
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