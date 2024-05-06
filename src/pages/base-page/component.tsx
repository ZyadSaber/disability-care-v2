import { memo, useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
import Header from "./partials/Header"

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
        <div className={`${scrollClass}`}>
            <Header />
            <div className="mt-16">
                <Outlet />
            </div>
        </div>
    )
})

export default BasePage