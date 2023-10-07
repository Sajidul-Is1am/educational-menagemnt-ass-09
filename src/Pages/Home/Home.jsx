import About from "../../Components/About/About";
import Banner from "../../Components/Header/Banner/Banner";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Service from "../../Components/Service/service";
import Teachers from "../../Components/Teachers/Teachers";

const Home = () => {
    return (
        <div className="">
            <div className="bg-primary">
                <Navbar className=""></Navbar>
                <Banner></Banner>
            </div>
            <Service></Service>
            <Teachers></Teachers>
            <About></About>
        </div>
    );
};

export default Home;