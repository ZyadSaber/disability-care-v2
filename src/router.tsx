import {
    createBrowserRouter,
} from "react-router-dom";
import BasePage from "./pages/base-page";
import NotFoundPage from "./pages/not-found-page";
import HomePage from "./pages/home-page";
import ContactUsPage from "./pages/contact-us-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <BasePage />,
        children: [
            {
                index: true,
                element: <HomePage />
            }, {
                path: "contact-us",
                element: <ContactUsPage />
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]
);