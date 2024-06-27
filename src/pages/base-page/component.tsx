import { memo, useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
import Header from "./partials/Header"
import Footer from "./partials/Footer"

const BasePage = memo(() => {
    const [lastScroll, setLastScroll] = useState(0);
    const [scrollClass, setScrollClass] = useState<string>();

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                setScrollClass("");
                return;
            }

            if (currentScroll > lastScroll && scrollClass !== "scroll-down") {
                setScrollClass("scroll-down");
            } else if (currentScroll < lastScroll && scrollClass === "scroll-down") {
                setScrollClass("scroll-up");
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll, scrollClass]);
    return (
        <div className={`pt-32 ${scrollClass}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
})

export default BasePage