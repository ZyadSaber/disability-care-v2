import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { useOpenCloseState } from "../../../hooks"
import { logo } from "../../../images"
import { web_links } from "../constants"

const Header = memo(() => {

    const { visible, handleOpen, handleClose } = useOpenCloseState()

    const logoName = useMemo(() => (
        <div className="flex rounded-lg p-2 text-white justify-center items-center gap-2 font-medium">
            <img src={logo} alt="logo" className="h-full w-14 bg-gray-100 rounded-full p-1" />
            <p>Max Care</p>
        </div>
    ), [])

    const menuItems =
        web_links.map(({ link, title }) => (
            <Link to={link} className="hover:text-red-500">{title}</Link>
        ))

    return (
        <header className="fixed top-0 left-0 w-full py-5 text-center transition-all h-16 z-40 flex justify-between items-center bg-blue-800 px-5 md:px-32">
            <Link to="/">
                {logoName}
            </Link>
            <div className="gap-5 text-white hidden md:flex">
                {menuItems}
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