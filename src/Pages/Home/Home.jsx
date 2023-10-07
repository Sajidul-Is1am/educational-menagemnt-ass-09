import Banner from "../../Components/Header/Banner/Banner";
import Navbar from "../../Components/Header/Navbar/Navbar";

const Home = () => {
    return (
        <div className="bg-primary"> 
            <Navbar className=""></Navbar>
            <Banner></Banner>          
        </div>
    );
};

export default Home;