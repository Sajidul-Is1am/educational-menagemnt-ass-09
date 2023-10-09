import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";
import { useContext } from "react";
import { CreateProvider } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    const {logInEmailPass,googleRegister} = useContext(CreateProvider);

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

       


        //    registration with email and passsword

        logInEmailPass(email,password)
        .then(resuls => {
            console.log(resuls,'succesfully added');
            toast.success('Successfully Login!')
            e.target.reset()
        })
        .catch(error =>{
            toast.error(error.message)
        })
    }
    const nagigate = useNavigate()
    const googleLogin = () =>{
        googleRegister()
        .then(() =>{
            toast.success('Successfully Login!')
            nagigate('/')
            
        })
        .catch(error => {
            toast.error(error.message)
        })
    } 


    return (
        <div>
            <div className="bg-gray-400">
                <Navbar></Navbar>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-4/5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold my-8">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email"  className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>
                                        You have an Account please <Link className="text-blue-700 font-bold" to={'/registration'}>Registration</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="flex text-center card-body">
                            <button onClick={googleLogin} className="btn text-2xl font-bold w-full"><FcGoogle></FcGoogle>google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;