import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {

    const {handleRegister,manageProfile} = useContext(authContext)
    const [error,setError] = useState("")
    const handleSubmit=(e) =>{
        e.preventDefault()
        setError("")
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        const conPassword = e.target.conPassword.value
        if(password.length < 6){
            setError("Password must contain at least 6 characters")
            return
        }
        if(password !== conPassword){
            setError("Passwords didn't match")
            return;
        }
        if(!/[a-z]/.test(password)){
            setError("Password must contain at least one lowercase letter")
            return;
        }
        if(!/[A-Z]/.test(password)){
            setError("Password must contain at least one uppercase letter")
            return;
        }
        console.log(name,image,email,password,conPassword)

        handleRegister(email,password)
        .then(res =>{
            manageProfile(name,image)
        })
    }

    return (
        <div className='w-80% mx-auto justify-center m-12'>
            <form action="" onSubmit={handleSubmit}>
                <div className='my-4'>
                  Name :<input
                    type="text"
                    placeholder=" name"
                    className="input border border-spacing-1 border-slate-400 w-full ml-2 max-w-xs"
                    name="name"
                    required
                  />
                </div>
                <div className='my-4'>
                  Image<input
                    type="text"
                    placeholder="upload image"
                    className="input border border-spacing-1 border-slate-400  w-full border-e-indigo-300 ml-2 max-w-xs"
                    name="image"
                    required
                  />
                </div>
                <div className='my-4'>
                 Email :<input
                    type="text"
                    placeholder="email"
                    className="input border border-spacing-1 border-slate-400 ml-2  w-full max-w-xs"
                    name="email"
                    required
                  />
                </div>
                <div className='my-4'>
                  Password :<input
                    type="text"
                    placeholder="password"
                    className="input border border-spacing-1 border-slate-400 ml-2  w-full max-w-xs"
                    name="password"
                    required
                  />
                </div>
                <div className='my-4'>
                    Confirm Password :<input
                         type="text"
                        placeholder="confirm password"
                        className="input border border-spacing-1 border-slate-400 ml-2  w-full max-w-xs"
                        name="conPassword"
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
                {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Register;