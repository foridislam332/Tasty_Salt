import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const nameRef = useRef(null);
    const photoRef = useRef(null);

    const { user, profileUpdate } = useContext(AuthContext);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photo = form.photoUrl.value;

        profileUpdate(user, name, photo)
            .then(() => {
                toast.success('Profile Update Success', {
                    position: "top-center",
                    autoClose: 3000,
                })
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 4000,
                })
            })
    }

    return (
        <div className='flex flex-col items-center justify-center pt-52 pb-20'>
            <div className="md:w-[450px] bg-white p-8 rounded-lg shadow-xl">
                <h1 className='text-4xl text-center mb-8'>Edit Your Profile</h1>
                <Link
                    to="/profile"
                    className="flex items-center text-gray-300 hover:text-primary transition-all duration-300 ease-in-out mb-4"
                >
                    <img
                        className="h-20 w-20 m-auto rounded-full object-cover shadow-lg shadow-[#00000049]"
                        src={user?.photoURL}
                        alt="User avatar"
                    />
                </Link>

                <form onSubmit={handleUpdate}>
                    <div className="rounded-md shadow-sm flex flex-col gap-4">
                        <div>
                            <label htmlFor="name" className='block'>Name :</label>
                            <input
                                ref={nameRef}
                                onClick={() => nameRef.current.setSelectionRange(0, nameRef.current.value.length)}
                                id='name'
                                name="name"
                                type="text"
                                defaultValue={user?.displayName}
                                placeholder="Enter your full name"
                                className='w-full py-2 pl-3 outline-secondary border' />
                        </div>

                        <div>
                            <label htmlFor="photoUrl" className='block'>Photo URL :</label>
                            <input
                                ref={photoRef}
                                onClick={() => photoRef.current.setSelectionRange(0, photoRef.current.value.length)}
                                id='photoUrl'
                                name="photoUrl"
                                type="text"
                                defaultValue={user?.photoURL}
                                placeholder="https://elample.jpg"
                                className='w-full py-2 pl-3 outline-secondary border' />
                        </div>
                        <button type='submit' className='btn_regular mt-4'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;