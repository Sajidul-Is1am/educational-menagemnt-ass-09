import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";

const ServiceDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id)

    const detailsData = useLoaderData()

    const detailItem = detailsData.find(item => item.id === idInt)

    const { detailed_description, price, image, name, location, date,start_time,duration } = detailItem


    return (
        <div >
            <div className="bg-gray-500">
                <Navbar></Navbar>
            </div>
            <div className="grid md:grid-cols-3 mx-24 my-20 gap-12">
                <div className="card w-full glass col-span-2">
                    <figure><img src={image} alt="car!" className="w-full" /></figure>
                    <div className="card-body">
                        <div className="flex items-center justify-between">
                            <h2 className="card-title">{name}</h2>
                            <span className="text-xl font-bold text-primary">Price : {price}</span>
                        </div>
                        <p className="leading-loose">{detailed_description}</p>

                    </div>
                </div>
                <div className="w-full border shadow-xl max-h-[570px]">
                    <div className="mx-8">
                        <h4 className="font-bold text-xl text-center mt-6">International Education Summit 2023</h4>
                        <hr className="my-6" />
                        <div className='my-4'>
                            <h4 className='text-lg font-bold '>Date:</h4>
                            <p>{date}</p>
                        </div>
                        <div className='my-4'>
                            <h4 className='text-lg font-bold '>Time :-</h4>
                            <p>{start_time}</p>
                        </div>
                        <div className='my-4'>
                            <h4 className='text-lg font-bold '>Duration :-</h4>
                            <p>{duration}</p>
                        </div>
                        <div className='my-4'>
                            <h4 className='text-lg font-bold '>Location:</h4>
                            <p>{location}</p>
                        </div>
                        <button className="btn w-full text-2xl capitalize bg-[#15A280] text-white mt-10">Add To Cart <BsFillArrowRightCircleFill className='text-xl'></BsFillArrowRightCircleFill></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;