import Navbar from '../../../Components/Header/Navbar/Navbar';
import './Vanue.css'

import vanue1 from '../../../assets/vanue/vanue001.jpg'
import vanue2 from '../../../assets/vanue/vanue002.jpg'
import vanue3 from '../../../assets/vanue/vanue003.jpg'
import vanue4 from '../../../assets/vanue/vanue004.jpg'
import vanue5 from '../../../assets/vanue/vanue005.jpg'
import vanue6 from '../../../assets/vanue/vanue006.jpg'
import vanue7 from '../../../assets/vanue/vanue007.jpg'
import vanue8 from '../../../assets/vanue/vanue008.webp'
import vanue9 from '../../../assets/vanue/vanue008.webp'
import vanue10 from '../../../assets/vanue/vanue010.webp'
import vanue11 from '../../../assets/vanue/vanue0011.jpeg'
import vanue12 from '../../../assets/vanue/vanue0012.webp'
import vanue13 from '../../../assets/vanue/vanue0013.webp'
import Footer from '../../../Components/Footer/Footer';

const Vanue = () => {
    return (

        <div>
            <div className='bg-gray-600'>
                <Navbar></Navbar>
            </div>
            <div>
                <div className='vanueBg'>
                    <div className='vanuOverlay flex items-center justify-center'>
                        <h2 className='text-white text-6xl font-bold '>Conference Venue & Accommodation</h2>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-8 mt-10 md:mx-24'>
                    <div className=''>
                        <img src={vanue1} alt="" className='w-full h-auto md:h-[570px]' />
                    </div>
                    <div>
                        <h3 className='text-3xl font-black mb-6'>STAY COMFORT DURING THE CONFERENCES PERIOD WITH <span className='text-secondary'>GLOBENJOY TOURS</span></h3>
                        <p className='text-base leading-relaxed mb-4 text-black justify-around'><span className='font-bold text-xl text-primary'>Luxurious Accommodations:</span> Enjoy your stay in carefully selected accommodations that prioritize your comfort and convenience.</p>

                        <p className='text-base leading-relaxed mb-4 text-black justify-around'><span className='font-bold text-xl text-primary'> Exclusive Transportation:</span> We provide hassle-free transportation to and from the conference venue, allowing you to focus on the event without worrying about logistics.</p>

                        <p className='text-base leading-relaxed mb-4 text-black justify-around'><span className='font-bold text-xl text-primary'>  Personalized Concierge:</span> Our attentive concierge service is at your disposal to assist with any requests or arrangements you may need, from reservations to local recommendations.</p>

                        <p> Catered Meals: Savor delicious and nourishing meals prepared by top chefs, ensuring youre energized and ready for each conference session.</p>

                        <p className='text-base leading-relaxed mb-4 text-black justify-around'><span className='font-bold text-xl text-primary'>Relaxation Spaces:</span> Take a break and unwind in our designated relaxation areas, perfect for recharging between conference sessions.</p>

                        <p className='text-base leading-relaxed mb-4 text-black justify-around'><span className='font-bold text-xl text-primary'>Networking Opportunities:</span> Connect with fellow conference attendees and build valuable professional relationships during your stay.</p>

                        <p className='text-base leading-relaxed mb-4 text-black justify-around'><span className='font-bold text-xl text-primary'>Tour Experiences:</span> Extend your visit with optional tours and excursions, allowing you to explore the local culture and attractions.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="my-16">
                    <h3 className="text-2xl font-bold text-center text-secondary capitalize mb-2">What We Do</h3>
                    <h3 className="text-5xl font-bold text-center">Our Gallery</h3>
                </div>
                <div className='mt-8'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1'>
                        <img src={vanue2} alt="" className='w-full h-[300px]' />
                        <img src={vanue3} alt="" className='md:col-span-2 w-full h-[300px]' />
                        <img src={vanue4} alt="" className=' h-[300px] w-full'/>
                        <img src={vanue5} alt=""  className='md:row-span-2 w-full h-full'/>
                        <img src={vanue6} alt="" className='w-full h-[300px]' />
                        <img src={vanue7} alt="" className='w-full h-[300px]' />
                        <img src={vanue8} alt=""  className='md:row-span-2 w-full h-full'/>
                        <img src={vanue9} alt=""  className='w-full h-[300px]'/>
                        <img src={vanue10} alt=""  className='w-full  h-[300px]'/>
                        <img src={vanue11} alt=""  className='w-full h-[300px]'/>
                        <img src={vanue12} alt=""  className='lg:col-span-2  w-full h-[300px]'/>
                        <img src={vanue13} alt="" className='w-full h-[300px]' />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Vanue;