import bannerRightImg from '../../../assets/images/banner-1-1.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="pb-20 pt-10 grid lg:grid-cols-2 items-center">
            {/* left site banner */}
            <div className='md:ml-24 mx-10'>
                <h1 className="lg:text-6xl md:text-4xl text-3xl  font-extrabold text-white max-w-xl leading-tight">Join Us at the International Education Summit 2023</h1>
                <p className='text-white max-w-lg text-sm lg:text-base font-medium leading-relaxed md:my-6 my-3'>Discover the future of education. Join experts and educators for insightful discussions on online learning, inclusivity, edtech, STEM, global perspectives, and more at the International Education Summit 2023.</p>
                <div className='flex gap-6 bannerBtn'>
                    <button className="btn btn-outline text-white  ">Take Now</button>
                    <button className="btn btn-outline text-white  ">Find The Services</button>

                </div>
            </div>
            {/* right site banner */}
            <div className="bgRightMain flex justify-center lg:justify-end mx-10 md:mx-16 lg:mx-0 lg:mt-0 mt-20">
                <img src={bannerRightImg} alt="" className='rounded-full md:border-[50px] border-[30px] border-secondary md:mr-5' />
            </div>
        </div>
    );
};

export default Banner;