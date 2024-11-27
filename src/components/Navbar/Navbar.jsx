import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Modal from "../Modal/Modal";

const Navbar = () => {
    return (
        <div className="min-h-20 bg-slate-300 md:flex md:justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold ml-12">DISCOUNT-Pro</h2>
            </div>
            <div>
                <NavLink to={"/"} className="text-lg font-semibold">Home</NavLink>
                <NavLink to={"/brands"} className="ml-4 text-lg font-semibold">Brands</NavLink>
                <NavLink to={"/myProfile"} className="ml-4 text-lg font-semibold">MyProfile</NavLink>
                <NavLink to={"/dashboard"} className="ml-4 text-lg font-semibold">Dashboard</NavLink>
                <NavLink to={"/aboutDev"} className="ml-4 text-lg font-semibold">About Dev</NavLink>
            </div>
            <div>
                <NavLink to={"/login"}>
                <button className="btn btn-accent mr-12">
                    Login
                </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
