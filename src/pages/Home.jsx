import Layout from "@/components/commons/Layout";
import Banner from "@/components/home/Banner";
import Discount from "@/components/home/Discount";
import Selection from "@/components/home/Selection";

const Home = () => {
    return (
        <Layout>
            <Banner />
            <Selection />
            <Discount />
        </Layout>
    );
};

export default Home;
