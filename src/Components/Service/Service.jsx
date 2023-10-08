import { useLoaderData } from "react-router-dom";
import ServiceItem from "../ServiceItem/ServiceItem";

const Service = () => {

    const services = useLoaderData()

    return (
        <div id="service" className="md:mx-24">
            {/* service heading */}
            <div className="my-16">
                <h3 className="text-2xl font-bold text-center text-primary capitalize mb-2">What We Do</h3>
                <h3 className="text-5xl font-bold text-center">Our Educational <span className="text-secondary">Services</span></h3>
            </div>
            {/* service item */}
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-6">
                {
                    services.map(serviceItem =><ServiceItem key={serviceItem.id} serviceItem={serviceItem}></ServiceItem>)
                }
           </div>
        </div>
    );
};

export default Service;