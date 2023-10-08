import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ServiceItem = ({ serviceItem }) => {
    const {name,image,price,short_description,button,id} = serviceItem
    return (
        <div className='flex justify-center'>
            <div className="card glass">
                <figure><img className='h-[300px] w-full' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <span className='text-primary font-bold'>Price : {price}</span>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${id}`} className="btn  bg-primary text-white">{button}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


ServiceItem.propTypes = {
    serviceItem:PropTypes.object.isRequired
}
export default ServiceItem;