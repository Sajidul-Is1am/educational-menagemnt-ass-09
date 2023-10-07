import PropTypes from 'prop-types';
const ServiceItem = ({ serviceItem }) => {
    const {image,description,price,title} = serviceItem
    return (
        <div className='flex justify-center'>
            <div className="card glass">
                <figure><img className='h-[300px] w-full' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <span className='text-primary font-bold'>Price : {price}</span>
                    <p>{description.slice(0,200)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn  bg-primary text-white">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


ServiceItem.propTypes = {
    serviceItem: PropTypes.array.isRequired
}
export default ServiceItem;