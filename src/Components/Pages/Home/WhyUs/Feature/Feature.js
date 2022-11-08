import React from 'react';

const Feature = ({feature}) => {
    const { img, title, price } = feature

    return (
        <div>
            <div>
                <div className='w-40 h-36 flex justify-center items-center border rounded-md bg-white border drop-shadow-sm'>
                    <div className='flex flex-col gap-3'>
                        <img src={img} className="w-24 mx-auto rounded-md h-auto" alt="" />
                        <p className='font-bold'>{title}</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Feature;