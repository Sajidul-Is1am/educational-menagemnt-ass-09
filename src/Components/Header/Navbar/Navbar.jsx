import { Link, NavLink } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';

import logo from '../../../assets/logo/eduAct.png'
import { useContext } from 'react';
import { CreateProvider } from '../../../AuthProvider/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.config';
import toast from 'react-hot-toast';
const Navbar = () => {
    const { user } = useContext(CreateProvider);
    console.log(user);
    const logout = () => {
        signOut(auth)
            .then(resuls => {
                toast.success('Successfully LogOut!')
            })
            .catch(error => {
                console.log(error.messsage);
            })
    }
    const navLink = <>
        <li><NavLink to={'/'} className="flex items-center hover:text-secondary transition-all ">Home<BiChevronDown ></BiChevronDown></NavLink></li>
        <li><NavLink to={'/service'} className="flex items-center hover:text-secondary transition-all">Service<BiChevronDown></BiChevronDown></NavLink></li>
        <li><NavLink to={'/teachers'} className="flex items-center hover:text-secondary transition-all">Teachers<BiChevronDown></BiChevronDown></NavLink></li>
        <li><NavLink to={'/about'} className="flex items-center hover:text-secondary transition-all">About<BiChevronDown></BiChevronDown></NavLink></li>
    </>


    return (
        <div className='py-8'>
            <div className="flex justify-between items-center md:mx-24">
                <div className="flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-white text-base">
                            {navLink}
                        </ul>
                    </div>
                    <a className="font-semibold text-white text-lg"><img src={logo} alt="" /></a>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu-horizontal px-1 flex gap-8 font-semibold text-white text-lg">
                        {navLink}
                    </ul>
                </div>

                <div className="font-semibold text-white text-lg flex items-center flex-row-reverse gap-6">

                    {
                        user ?
                            <Link onClick={logout} to={'/login'} className="bg-secondary px-8 py-3 rounded-lg">Logout</Link> :
                            <Link to={'/login'} className="bg-secondary px-8 py-3 rounded-lg">Login</Link>
                    }
                    {
                        user ? <div className='flex gap-3'>
                            <img src={user.displayName} alt="" className='w-[30px] h-[30px] rounded-full' />
                            <p>{user.photoURL}</p>
                        </div> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;