import React from 'react'
import { ProductData } from './ProductData'
import { Link } from 'react-router-dom'
export default function ProductCard() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto max-container-width">
                    <div className="flex flex-wrap -m-4">
                        {ProductData.map((item, index) => {
                            return (
                                <div key={index} className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img src={item.imgSrc} alt="blog" className='w-full' />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.title}</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.heading}</h1>
                                            <p className="leading-relaxed mb-3">{item.description}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>{item.price}
                                                </span>

                                            </div>
                                            <Link to="/cart">
                                                <button className=" mt-5 text-white mx-auto  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add To Cart</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
