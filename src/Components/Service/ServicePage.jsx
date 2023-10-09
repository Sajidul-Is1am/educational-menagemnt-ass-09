import { useLoaderData } from "react-router-dom";
import ServiceItem from "../ServiceItem/ServiceItem";
import Footer from "../Footer/Footer";


const ServicePage = () => {

    const services = useLoaderData()

    return (
        <div>
            <div className="lg:mx-24 md:mx-16 mx-10">
                {/* service heading */}
                <div className="my-16">
                    <h3 className="md:text-2xl text-xl font-bold text-center text-primary capitalize mb-2">What We Do</h3>
                    <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center">Our Educational <span className="text-secondary">Services</span></h3>
                </div>
                {/* service item */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-6">
                    {
                        services.map(serviceItem => <ServiceItem key={serviceItem.id} serviceItem={serviceItem}></ServiceItem>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServicePage;