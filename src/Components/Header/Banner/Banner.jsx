import bannerRightImg from '../../../assets/images/banner-1-1.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="pb-20 pt-10 grid md:grid-cols-2 items-center">
            {/* left site banner */}
            <div className='md:ml-24'>
                <h1 className="text-7xl font-extrabold text-white max-w-xl leading-tight">A Better
                    Learning Journey Future Start Here</h1>
                <p className='text-white max-w-lg text-base font-medium leading-relaxed my-6'>We are providing you the best tutor to enhance your knowledge and skill. Lets get started and get a relaxing learning.</p>
                <div className='flex gap-6 bannerBtn'>
                    <button className="btn btn-outline text-white  ">Take Now</button>
                    <button className="btn btn-outline text-white  ">Find The Services</button>
                  
                </div>
            </div>
            {/* right site banner */}
            <div className="bgRightMain flex justify-end">
                <img src={bannerRightImg} alt="" className='rounded-full md:border-[50px] border-[30px] border-secondary md:mr-5' />
            </div>
        </div>
    );
};

export default Banner;