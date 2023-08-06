import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [logDetail, setLogDetail] = useState({
        email: "",
        password: "",
    })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Simulated success response
            const response = { data: { message: 'Login successful' } };

            // Handle success response here
            alert("login successfully");
            setErrorMessage('');
        } catch (error) {
            // Simulated error response
            const errorResponse = { message: 'Invalid credentials' };

            // Handle error response here
            console.error(errorResponse.message);
            setErrorMessage(errorResponse.message);
        }
    };

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 md:py-24 mx-auto flex flex-wrap items-center max-container-width">

                    <div className="w-full lg:w-4/5 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full                          mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg text-center font-bold text-3xl mb-5">SignIn</h2>

                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <Link to="/" className='text-center'>
                            <button onClick={handleLogin} className="text-white mx-auto w-1/2 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
