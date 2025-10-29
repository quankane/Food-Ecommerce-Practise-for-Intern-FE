import React, { lazy, Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = lazy(() => import("@/pages/Home.jsx"));

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Thời gian hiệu ứng (ms)
            once: true, // Chỉ chạy một lần khi cuộn đến viewport mới cuộn
        });
    }, []);

    const routes = useRoutes([{ path: "/", element: <Home /> }]);

    return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default App;
