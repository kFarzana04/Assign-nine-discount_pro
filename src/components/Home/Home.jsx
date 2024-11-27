import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandCards from "../BrandCard/BrandCards";



const Home = () => {
    const brands = useLoaderData();
    console.log(brands);
  
    return (
      <div className="w-11/12 mx-auto">
        <Banner></Banner>
        <div className="grid grid-cols-3 gap-2 my-8">
          {brands.slice(0,6).map((brand) => (
            <BrandCards key={brand._id} brand={brand}></BrandCards>
          ))}
        </div>
        <button className=" mx-auto block btn btn-primary">
            <NavLink to={"/brands"}>Show More</NavLink>
        </button>
      </div>
    );
  };

export default Home;