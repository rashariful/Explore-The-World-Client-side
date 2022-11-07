import React from 'react';

const Products = ({ product }) => {
    const { image, name, price, description } = product
    return (
        <div>
            <div className="border border-gray-200 py-6 px-4 rounded-md shadow-sm drop-shadow-md w-full h-[100%]">
                <img src={image} className='bg-indigo-300 rounded-md hover:scale-90 transition duration-200 h-96 w-full' alt="" />
                <h3 className='text-gray-800 font-semibold text-lg py-3'>Name: {name}</h3>
                <p className='text-gray-700 font-bold pb-3'>Price:$ {price}</p>
                <p className='text-gray-500 pb-3'>Description: {description ? description.slice(0, 80) : "No found Description"}</p>
                
            </div>
        </div>
    );
};

export default Products;