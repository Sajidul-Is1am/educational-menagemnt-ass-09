import './Navbar.css'
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
            .then(() => {
                toast.success('Successfully LogOut!')
            })
            .catch(error => {
                console.log(error.messsage);
            })
    }
    const navLink = <>
        <li><NavLink to={'/'} className="flex items-center hover:text-secondary transition-all ">Home<BiChevronDown ></BiChevronDown></NavLink></li>
        <li><NavLink to={'/service'} className="flex items-center hover:text-secondary transition-all">Service<BiChevronDown></BiChevronDown></NavLink></li>
        <li><NavLink to={'/teachers'} className="flex items-center hover:text-secondary transition-all">Team<BiChevronDown></BiChevronDown></NavLink></li>
        <li><NavLink to={'/about'} className="flex items-center hover:text-secondary transition-all">About<BiChevronDown></BiChevronDown></NavLink></li>
        {user &&
            <div className='lg:flex gap-8'>
                <li><NavLink to={'/spatialevent'} className="flex items-center hover:text-secondary transition-all">Spacial Event<BiChevronDown></BiChevronDown></NavLink></li>
                <li><NavLink to={'/vanue'} className="flex items-center hover:text-secondary transition-all">Vanue<BiChevronDown></BiChevronDown></NavLink></li>
            </div>
        }
    </>


    return (
        <div className='py-8 bg-primary'>
            <div className="flex justify-between items-center md:mx-24">
                <div className="flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-blue-700 rounded-box w-44 font-semibold text-white text-base grid justify-center">
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

                <div className="">
                    <div>
                        <div className="flex items-center">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost md:hidden">
                                    {
                                        user ?
                                            <img src={user?.photoURL} alt="" className='w-[40px] h-[40px] rounded-full' /> : <Link to={'/login'} className="bg-secondary lg:px-8 px-6 py-2 lg:py-3 rounded-lg">Login</Link>
                                    }
                                </label>
                                <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 mr-3 z-[1] p-4 shadow bg-gray-600 rounded-box w-40 font-semibold text-white text-base grid justify-center">
                                    {/* small devaice dropdown item */}
                                    {
                                        user ? <div className='flex gap-3 items-center justify-center mb-3'>
                                            <p className='text-base'>{user?.displayName}</p>
                                        </div> : ''
                                    }
                                    {
                                        user ?
                                            <Link onClick={logout} to={'/login'} className="bg-secondary lg:px-8 px-6 py-2 lg:py-3 rounded-lg text-xl">Sing Out</Link> :
                                            <Link to={'/login'} className="bg-secondary lg:px-8 px-6 py-2 lg:py-3 rounded-lg">Login</Link>
                                    }
                                    {/* end */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:flex flex-row-reverse font-semibold text-white text-lg items-center  gap-6'>
                        {/* large device */}
                        {
                            user ?
                                <Link onClick={logout} to={'/login'} className="bg-secondary lg:px-8 md:px-6 md:py-2 lg:py-3 rounded-lg md:text-xl text-[12px]">Sing Out</Link> :
                                <Link to={'/login'} className="bg-secondary lg:px-8 md:px-6 md:py-2 lg:py-3 rounded-lg">Login</Link>
                        }
                        {
                            user ? <div className='flex gap-3 items-center'>
                                <img src={user?.photoURL} alt="" className='w-[40px] h-[40px] rounded-full' />
                                <p className='text-base'>{user?.displayName}</p>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;