import {
    createBrowserRouter,
} from "react-router-dom";
import BasePage from "./pages/base-page";
import NotFoundPage from "./pages/not-found-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <BasePage />,
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]
);