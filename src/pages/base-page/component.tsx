import { memo } from "react";
import { Outlet } from "react-router-dom"

const BasePage = memo(() => {
    return (
        <>
            div
            <Outlet />
        </>
    )
})

export default BasePage