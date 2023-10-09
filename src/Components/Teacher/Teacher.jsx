import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import './Teacher.css'
import { useEffect } from 'react';
const Teacher = ({ teacher }) => {
    const { picture, expertise, name } = teacher
     // aos
     useEffect(() =>{
        AOS.init({
            duration: 2000
        });
    },[])
    return (
        <div>
            <div className='flex flex-col justify-center relative '  data-aos="fade-up">
                <img src={picture} alt="" className='rounded-[170px] p-6 border-dashed border-[3px] border-[#80008017]' />
                <div className='text-center'>
                    <h3 className='text-4xl font-bold mt-4'>{name}</h3>
                    <h5 className='text-secondary font-medium text-base my-3'>{expertise}</h5>
                </div>
            </div>
        </div>
    );
};

Teacher.propTypes = {
    teacher: PropTypes.object.isRequired
}
export default Teacher;