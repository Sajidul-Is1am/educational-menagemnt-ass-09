import { FaAward } from 'react-icons/fa';
import { MdCastForEducation } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import { ImManWoman } from 'react-icons/im';
import { GrServices } from 'react-icons/gr';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import aboutleft1Img from '../../assets/about/img-1.jpg'
import aboutleft2Img from '../../assets/about/img-2.jpg'
import Footer from '../Footer/Footer';

const AboutPage = () => {
    return (
        <div  >
           

            <div className="my-16">
                <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center">About <span className="text-secondary">Us</span></h3>
            </div>
            <div className="lg:mr-24 md:mx-16 mx-10 md:mb-20">

                {/*about body  */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
                    {/* left about */}
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='col-span-1'><img src={aboutleft1Img} alt="" className='rounded-[200px] ' /></div>
                        <div className='md:col-span-1'>
                            <img src={aboutleft2Img} alt="" className='rounded-[200px]' />

                            <div className='flex bg-[#15A280] justify-center items-center rounded-xl my-3 mt-6'>
                                <div className='p-4 bg-white rounded-full m-6 ml-0'>
                                    <FaAward className='text-3xl'></FaAward>
                                </div>
                                <div>
                                    <span className='text-2xl font-bold text-white'>25+</span>
                                    <h4 className='text-xl font-bold text-white'>Years Of <span className=''>Experience</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right about */}
                    <div>
                        <h5 className="text-xl text-primary font-semibold">About EduAct</h5>
                        <h2 className="lg:text-6xl md:text-5xl text-3xl font-bold my-8 leading-snug">A New Different Way To Improve Your <span className="text-secondary">Skills.</span></h2>
                        <p className='md:leading-loose text-justify'>The International Education Summit 2023 is a premier gathering of educators, thought leaders, and experts from around the globe. We are dedicated to advancing education through innovation, inclusivity, and collaboration. Join us for three days of insightful discussions, workshops, and networking opportunities that will shape the future of learning.</p>
                        <hr className="my-6" />

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                            <div className='flex items-center gap-6'>
                                <div className='p-5 rounded-full bg-[#ffa60036] '><MdCastForEducation className='h-[30px] w-[30px] text-orange-600 '></MdCastForEducation> </div> <p className='text-xl font-medium'>1250+ Service</p>
                            </div>
                            <div className='flex items-center gap-6 '>
                                <div className='p-5 rounded-full  bg-[#15a28137]'><GiTeacher className='h-[30px] w-[30px] text-[#15A280] '></GiTeacher> </div> <p className='text-xl font-medium'>250+ Team Mambers.</p>
                            </div>
                            <div className='flex items-center gap-6 '>
                                <div className='p-5 rounded-full bg-[#0000ff3f] '><ImManWoman className='h-[30px] w-[30px]  text-primary'></ImManWoman> </div> <p className='text-xl font-medium'>25k+ client.</p>
                            </div>
                            <div className='flex items-center gap-6 '>
                                <div className='p-5 rounded-full bg-[#8080804c] '><GrServices className='h-[30px] w-[30px] text-orange-600 '></GrServices> </div> <p className='text-xl font-medium'>24/7 hour Service.</p>
                            </div>
                        </div>
                        <hr className="my-6" />
                        <button className="btn text-xl gap-4 bg-secondary text-white mb-10">
                            Learn More About Us
                            <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutPage;