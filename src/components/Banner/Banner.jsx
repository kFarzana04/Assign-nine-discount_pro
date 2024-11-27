import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto items-center text-center'>
        <div className="carousel ml-12 mb-36">
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/RDLNqZY/portrait-azeri-woman-traditional-dress-holding-sale-nameplate-red.jpg"
                className="w-4/5 absolute" />
                <div className="relative">
                    <h1 className="text-5xl text-center font-bold text-white mt-20 ml-12">Welcome to Discount-Pro</h1>
                    <p className="text-3xl text-slate-200 font-light">
                    Get the latest coupons <br /> and discounts..
                    </p>
                    <h3 className="text-2xl font-bold mt-12 mb-6 text-white">
                        Sign Up to Discount-Pro
                    </h3>
                    <NavLink to={"/register"}>
                        <button className="btn btn-primary bg-[#F0001D] border border-spacing-2
                         border-white text-lg font-bold px-7 pb-1">
                                Register Now
                        </button>
                    </NavLink>
                </div>
            </div>
            <div id="item2" className="carousel-item w-full">
                <img
                  src="https://i.ibb.co.com/RDLNqZY/portrait-azeri-woman-traditional-dress-holding-sale-nameplate-red.jpg"
                  className="w-4/5" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/RDLNqZY/portrait-azeri-woman-traditional-dress-holding-sale-nameplate-red.jpg"
                className="w-4/5" />
            </div>
            </div>
            <div className="absolute left-5 right-5 top-2/3 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Banner;