import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { CreateProvider } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(CreateProvider)

    
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }
    return (
        children
    );
};
PrivetRoute.propTypes = {
    children:PropTypes.node.isRequired
}

export default PrivetRoute;