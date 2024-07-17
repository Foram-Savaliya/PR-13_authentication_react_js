import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, googleAuthProvider } from '../firestoreConfig';
import '../pages/style.css'
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    const handleLogin = async () => {
        try {
            let result = await signInWithPopup(auth, googleAuthProvider)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <>
            <div className='background-img'>
                <div align="center" className=' py-5'>
                    <h3 className='text-white'>Sign in with Google<br></br>in React</h3>
                    <button onClick={() => handleLogin()} className='my-4 btn btn-primary d-flex align-items-center'>
                    <FaGoogle className='me-2'/> Login with Google
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login