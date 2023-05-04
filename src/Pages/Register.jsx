import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext)
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        const photo = form.photoUrl.value;

        if (password.length < 6) {
            toast.error('The password is less than 6 characters!', {
                position: "top-center",
                autoClose: 3000,
            });
        }
        else if (password !== confirmPassword) {
            toast.warning('Confirm your password !', {
                position: "top-center",
                autoClose: 3000,
            });
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;

                // profile update
                profileUpdate(user, name, photo)
                    .then(() => {

                    })
                    .catch(error => {
                        toast.error(error.message, {
                            position: "top-center",
                            autoClose: 4000,
                        })
                    })

                form.reset();
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 4000,
                })
            });
    }

    return (
        <div className='flex flex-col items-center justify-center pt-52 pb-20'>
            <div className="md:w-[450px] bg-white p-8 rounded-lg shadow-xl">
                <form onSubmit={handleOnSubmit}>
                    <h1 className='text-4xl text-center mb-8'>Please Register</h1>
                    <div className="rounded-md shadow-sm flex flex-col gap-4">
                        <div>
                            <label htmlFor="name" className='block'>Name :</label>
                            <input id='name' name="name" type="text" placeholder="Name" className='w-full py-2 pl-3 outline-secondary border' />
                        </div>
                        <div>
                            <label htmlFor="email" className='block'>Email address :</label>
                            <input id='email' name="email" type="email" required placeholder="Email address" className='w-full py-2 pl-3 outline-secondary border' />
                        </div>
                        <div>
                            <label htmlFor="password" className='block'>Password :</label>
                            <input id='password' name="password" type="password" required placeholder="Password" className='w-full py-2 pl-3 outline-secondary border' />
                        </div>
                        <div>
                            <label htmlFor="confirm" className='block'>Confirm Password :</label>
                            <input id='confirm' name="confirm" type="password" required placeholder="Confirm Password" className='w-full py-2 pl-3 outline-secondary border' />
                        </div>
                        <div>
                            <label htmlFor="photoUrl" className='block'>Photo URL :</label>
                            <input id='photoUrl' name="photo_Url" type="text" placeholder="Photo URL" className='w-full py-2 pl-3 outline-secondary border' />
                        </div>
                        <button type='submit' className='btn_regular mt-4'>Register</button>
                    </div>
                </form>

                <p className='text-center mt-5'>
                    Already have an account?
                    <Link className='text-lg font-semibold' to='/login'> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;