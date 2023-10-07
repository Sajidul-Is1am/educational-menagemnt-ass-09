import Banner from "../../Components/Header/Banner/Banner";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Service from "../../Components/Service/service";

const Home = () => {
    return (
        <div className="">
            <div className="bg-primary">
                <Navbar className=""></Navbar>
                <Banner></Banner>
            </div>
            <Service></Service>
        </div>
    );
};

export default Home;