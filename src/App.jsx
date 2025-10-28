import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));

function App() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const routes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
    ]);

    return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
}

export default App;
