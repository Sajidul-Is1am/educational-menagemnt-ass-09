import { Link } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";
import { CreateProvider } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Registration = () => {

    const { registrationEmailPass, profileUpdate } = useContext(CreateProvider);
    const passsowrdValidation = /(?=.*[A-Z])(?=.*[!@#$%^&*])/

    // const passsowrdValidation = /[A-Z!@#$%^&*]/
    const handleRegistrar = e => {

        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const username = form.get('username')
        const profile = form.get('profile')
        const email = form.get('email')
        const password = form.get('password')
        console.log(username, profile);

        if (password.length < 6) {
            return toast.error('Password should be at least 6 characters!')
        }

        if (!passsowrdValidation.test(password)) {
            return toast.error('password not valid')
        }

        //    registration with email and passsword

        registrationEmailPass(email, password)
            .then(() => {
                profileUpdate(username, profile)
                    .then(() => {
                        toast.success('Successfully Registared!')
                    })
                e.target.reset()
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
                        <h1 className="text-5xl font-bold my-8">Please Registration</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistrar} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">UserName</span>
                                </label>
                                <input type="text" placeholder="UserName" name="username" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Img Link</span>
                                </label>
                                <input type="text" placeholder="Profile Img Link" name="profile" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>
                                        You have an Account please <Link className="text-blue-700 font-bold" to={'/login'}>Login</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Registration;