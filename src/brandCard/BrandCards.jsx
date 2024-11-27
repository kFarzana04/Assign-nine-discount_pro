import React from "react";
import { NavLink } from "react-router-dom";

const BrandCards = ({ brand }) => {
  const {
    brand_name,
    image,
    description,
    rating,
    _id: id,
    category,
    isSaleOn,
  } = brand;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={brand_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {brand_name}
          <div className="badge badge-secondary">{rating} ★</div>
        </h2>
        <p title={description}>{description.slice(0, 3)}...</p>
        <div className="card-actions justify-between">
          <span className="badge badge-outline">{category}</span>
          {isSaleOn && <span className="badge badge-success">Sale On</span>}
        </div>
        <div className="card-actions justify-end mt-4">
          <NavLink to={`/brand/${id}`}>
            <button className="badge badge-outline p-4 bg-primary text-white font-bold">
              Checkout More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
