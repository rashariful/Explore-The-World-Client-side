import React, { useEffect, useState } from 'react';
import Feature from './Feature/Feature';

const WhyUs = () => {
    const [features, setFeatures] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then( res => res.json())
        .then(data => setFeatures(data))
    },[])


    return (
        <>
            
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                    <div className="mb-10 md:mb-16">
                        <h2 className="text-red-600 text-xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Core Features</h2>
                        <h2 className="text-gray-800 text-4xl lg:text-4xl font-bold text-center mb-4 md:mb-6">Why Choose Us</h2>

                        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>


                    <div className="grid grid-cols-6 w-9/12 mx-auto">

                        {
                            features.map(feature => 
                            <Feature
                            key={feature._id}
                            feature={feature}
                            ></Feature>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyUs;