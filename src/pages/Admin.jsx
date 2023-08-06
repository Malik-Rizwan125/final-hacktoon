import React from 'react'
import { Link } from 'react-router-dom'
export default function admin() {
    return (
        <>
            <div className="container max-container-width mx-auto my-10">
                <h1 className='mb-2'>add Product here</h1>
                <Link to="/addProduct" className='text-center'>
                    <button className="text-white mx-auto  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Product</button>
                </Link>
            </div>
        </>
    )
}
