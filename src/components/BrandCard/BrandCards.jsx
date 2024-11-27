import React from 'react';

const BrandCards = ({ brand }) => {
  console.log("Brand Data:", brand);

  const { brand_name, brand_logo, image, description, coupon_description } = brand;

  return (
    <div className='w-11/12 mx-auto'>
        <div className="card bg-base-100 w-96 p-6 shadow-xl">
            <figure>
              <img src={image} alt={brand_name} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {brand_name}
                <div>
                    <p className='text-red-700'>{coupon_description}</p>
                </div>
                </h2>
                <p>{description}</p>
                <div className="card-actions flex justify-end items-center">
                    <img src={brand_logo} alt={`${brand_name} Logo`} className="h-24 w-auto" />
                    <div className="badge badge-outline text-xl font-bold pb-3 pt-1">Coupons</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BrandCards;
