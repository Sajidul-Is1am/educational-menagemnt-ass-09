import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Header/Banner/Banner";
import Service from "../../Components/Service/service";
import Teachers from "../../Components/Teachers/Teachers";

const Home = () => {
    return (
        <div className="">
            <div className="bg-primary">
                {/* <Navbar className=""></Navbar> */}
                <Banner></Banner>
            </div>
            <Service></Service>
            <Teachers></Teachers>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;