import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from "./router"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Suspense fallback={undefined}>
        <RouterProvider router={router} />
    </Suspense>
)
