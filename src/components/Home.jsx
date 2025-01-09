import React from "react";
import { Carousel } from "flowbite-react";
import bannar from "../assets/bannar1.png"
const Home =()=>{
    return(
        <div className="bg-neutralSilver" id="home">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
           <Carousel className="w-full mx-auto">
        <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
         
         <div className="w-full md:w-1/2 flex justify-start">
          <img className="w-5/6 md:w-full object-contain" src={bannar} alt="" />
         </div>
         {/* hero text  */}
         <div className="md:w:w-1/2">
         <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Transform Your Life in Just <span className="text-red-500 leading-snug">12 Weeks</span> </h1>
         <p className="text-neutralGrey text-base mb-8">Discover personalized fitness plans and expert insights to achieve your goals.</p>
         <button className="px-7 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-all duration-300 hover:-translate-y-4">Join Now</button>
         </div>
        </div>
        <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
         
         <div className="w-full md:w-1/2 flex justify-start">
          <img className="w-5/6 md:w-full object-contain" src={bannar} alt="" />
         </div>
         {/* hero text  */}
         <div className="md:w:w-1/2">
         <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug"> Fuel Your Body with the  <span className="text-red-500 leading-snug">Right Nutrition</span> </h1>
         <p className="text-neutralGrey text-base mb-8">Unlock the secrets to a balanced diet with easy-to-follow meal plans tailored to your fitness goals.</p>
         <button className="px-7 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-all duration-300 hover:-translate-y-4">Learn More</button>
         </div>
        </div>
        <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
         
         <div className="w-full md:w-1/2 flex justify-start">
          <img className="w-5/6 md:w-full object-contain" src={bannar} alt="" />
         </div>
         {/* hero text  */}
         <div className="md:w:w-1/2">
         <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Step Upto<span className="text-red-500 leading-snug"> Your Best Self</span> </h1>
         <p className="text-neutralGrey text-base mb-8">Embrace a healthier lifestyle with our expert-guided workout routines designed just for you.</p>
         <button className="px-7 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-all duration-300 hover:-translate-y-4">Get Started</button>
         </div>
        </div>

        </Carousel>
            </div>

        </div>
    );
};
export default Home;