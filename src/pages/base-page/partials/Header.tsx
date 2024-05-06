import { memo } from "react";
import { Link } from "react-router-dom";

const Header = memo(() => {

    return (
        <header className="fixed top-0 left-0 w-full py-5 text-center transition-all h-16 z-40 flex justify-around items-center bg-blue-800">
            <Link to="/">
                <h2 className="text-white font-medium text-2xl">Max <span className="text-yellow-400">Care</span></h2>
            </Link>
            {/* <div className="flex gap-5 text-white">
                <Link to="#" className="hover:text-red-500">Home</Link>
                <Link to="#" className="hover:text-red-500">Book</Link>
                <Link to="#" className="hover:text-red-500">Discharges</Link>
                <Link to="#" className="hover:text-red-500">About Us</Link>
            </div> */}
            <div className="w-8 flex-wrap justify-end flex md:hidden">
                <span className="bg-white mb-1.5 h-0.5 w-full"></span>
                <span className="bg-white mb-1.5 h-0.5 w-full"></span>
                <span className="bg-white mb-1.5 h-0.5 w-full"></span>
            </div>
        </header>
    )
});

export default Header;