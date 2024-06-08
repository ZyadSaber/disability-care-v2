import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { useOpenCloseState } from "../../../hooks"

const Header = memo(() => {

    const { visible, handleOpen, handleClose } = useOpenCloseState()

    const logoName = useMemo(() => (<h2 className="text-white font-medium text-2xl">Max <span className="text-yellow-400">Care</span></h2>), [])

    const menuItems = useMemo(() => (
        <>
            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="#" className="hover:text-red-500">About Us</Link>
            <Link to="#" className="hover:text-red-500">Services</Link>
            <Link to="#" className="hover:text-red-500">Book A Trip</Link>
            <Link to="#" className="hover:text-red-500">Careers</Link>
            <Link to="contact-us" className="hover:text-red-500">Contact Us</Link>
        </>
    ), [])

    return (
        <header className="fixed top-0 left-0 w-full py-5 text-center transition-all h-16 z-40 flex justify-between items-center bg-blue-800 px-5 md:px-32">
            <Link to="/">
                {logoName}
            </Link>
            <div className="gap-5 text-white hidden md:flex">
                {menuItems}
            </div>
            <div className="text-white hidden md:block font-bold text-lg">
                Trip Charge Estimator
            </div>
            <div className="w-8 flex-wrap justify-end flex md:hidden" onClick={handleOpen}>
                <span className="bg-white mb-1.5 h-0.5 w-full"></span>
                <span className="bg-white mb-1.5 h-0.5 w-full"></span>
                <span className="bg-white mb-1.5 h-0.5 w-full"></span>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full flex-col bg-blue-900 transition-all p-5  ${visible ? "flex" : " translate-x-full invisible"}`}>
                <div className="justify-between flex ">
                    {logoName}
                    <p onClick={handleClose}>close</p>
                </div>
                <div className="flex flex-col items-start my-4 gap-4 text-lg text-white">
                    {menuItems}
                </div>
            </div>
        </header>
    )
});

export default Header;