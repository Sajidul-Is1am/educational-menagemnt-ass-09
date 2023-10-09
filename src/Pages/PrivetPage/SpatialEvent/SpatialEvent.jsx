import { useEffect, useState } from "react";
import EventItem from "../EventItem/EventItem";
import Footer from "../../../Components/Footer/Footer";

const SpatialEvent = () => {

    const [events,setEvents] = useState([])


    useEffect(()=>{
        fetch('/spatialevent.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
    return (
        <div>
            <div className="lg:mx-24 md:mx-16 mx-10  my-10">
                {
                    events.map(event => <EventItem key={event.id} event={event}></EventItem>)
                }
            </div>   
            <Footer></Footer>        
        </div>
    );
};

export default SpatialEvent;