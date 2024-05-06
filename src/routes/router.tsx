import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import PageRoutes from "./routes";
import BasePage from "../pages/base-page";
import NotFoundPage from "../pages/not-found-page";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<BasePage />}>
                {PageRoutes.map(({ path, Component }) => {
                    return (
                        <Route
                            path={path}
                            key={path.toString()}
                            element={Component ? <Component /> : null}
                        >
                        </Route>
                    );
                })}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);