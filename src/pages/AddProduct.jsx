import React from 'react'
import { Link } from 'react-router-dom'
export default function AddProduct() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 md:py-24 mx-auto flex flex-wrap items-center max-container-width">
                    <div className="w-full lg:w-4/5 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg text-center font-bold text-3xl mb-5">Add Product</h2>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-600">Enter Product Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Enter Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="price" className="leading-7 text-sm text-gray-600">price</label>
                            <input type="tel" id="tel" name="tel" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="quantity" className="leading-7 text-sm text-gray-600">Enter Quantity</label>
                            <input type="quantity" id="quantity" name="quantity" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="quantity" className="leading-7 text-sm text-gray-600">Brand Name</label>
                            <input type="brand" id="brand" name="brand" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <Link to="/" className='text-center'>
                            <button className="text-white mx-auto w-1/2 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">ADD Product</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
