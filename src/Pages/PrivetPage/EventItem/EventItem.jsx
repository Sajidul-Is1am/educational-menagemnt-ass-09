

const EventItem = ({ event }) => {
    const { image_url, location, event_time, event_date, event_description, event_short_description, event_title ,event_highlights} = event
    return (
        <div className="grid md:grid-cols-2 md:gap-12">
            <div>
                <div className="card w-full bg-base-100 shadow-xl mb-20">
                    <figure><img src={image_url} alt="Shoes" className="w-full h-[450px]" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{event_title}</h2>
                        <p>{event_short_description}</p>
                        <div className="card-actions md:justify-between text-left">
                            <button className="text-xl text-black ">Date:</button>
                            <button className="text-xl text-black ">Location:</button>
                            <button className="text-xl text-black ">Time</button>
                        </div>
                        <div className="card-actions md:justify-between">
                            <button className="btn btn-primary bg-[#15A280] border-none text-white">{event_date}</button>
                            <button className="btn btn-primary bg-[#15A280] border-none text-white">{location}</button>
                            <button className="btn btn-primary bg-[#15A280] border-none text-white">{event_time}</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="md:mb-20">
                <h3 className="text-4xl font-bold mb-6">{event_title}</h3>
                <p className="leading-loose mb-6">{event_description}</p>
                <h3 className="text-2xl font-bold mb-4">Event HighLight : </h3>
                {
                    event_highlights?.map((list,idx) => <div key={idx}>
                        <li className="mb-2"> {list}</li>
                    </div>)
                }
            </div>
        </div>
    );
};

export default EventItem;