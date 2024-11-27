import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandCards from '../Brand/Brands';

const Brands = () => {
    const brands = useLoaderData()
    return (
        <div className='w-11/12 mx-auto'>
            <div className="grid grid-cols-3 gap-2 my-8">
            {brands.map((brand) => (
            <BrandCards key={brand._id} brand={brand}></BrandCards>
            ))}
        </div>
        </div>
    );
};

export default Brands;