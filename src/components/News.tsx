import React from 'react'
import {outfit} from "@/app/font";

const News = () => {
    return (
        <section className={`w-full bg-black flex flex-col items-center justify-center py-20 gap-10 text-white ${outfit.className}`}>
            <div className="w-4/5 flex flex-col items-center justify-center gap-15 border-1 border-white/30 rounded-2xl backdrop-blur-md bg-white/10 p-25">
                <h1 className="text-lg lg:text-5xl font-bold">SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p className="text-sm lg:text-lg font-light">Get the latest news and updates from CoFounds.</p>
                <div className="flex items-center justify-center gap-10 w-1/2">
                    <input type="text" placeholder="Enter your email address" className="w-full p-3 border-1 border-white/30 rounded-2xl backdrop-blur-md bg-white text-black outline-none"/>
                    <button className="flex items-center justify-center text-white text-xl p-3 rounded-2xl bg-blue-700 hover:bg-blue-800 transition-all duration-200 cursor-pointer z-50">Subscribe</button>
                </div>
            </div>
        </section>
    )
}
export default News
