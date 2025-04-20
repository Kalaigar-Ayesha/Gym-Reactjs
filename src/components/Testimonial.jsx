import React from "react";

const Testimonials = () => {
  return (
    <div className="mt-20 px-4 lg:px-14 max-w-screen-2xl mx-auto my-16" id="testimonial">
      
      {/* Why Choose Us Section */}
      <div className="my-16">
        <h2 className="text-4xl text-center text-neutralDGrey font-semibold mb-12">Why Choose FutureCent Gym?</h2>

        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Expert Trainers */}
          <div className="bg-neutralSilver p-6 rounded-lg shadow-md w-full md:w-1/3  hover:scale-105 hover:bg-neutralLightGray hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-red-500 mb-4">Expert Trainers</h4>
            <p className="text-sm text-neutralGrey leading-6">
              Our certified trainers are dedicated to helping you achieve your fitness goals. With personalized attention, you'll get the best guidance to stay on track.
            </p>
          </div>

          {/* State-of-the-Art Equipment */}
          <div className="bg-neutralSilver p-6 rounded-lg shadow-md w-full md:w-1/3  hover:scale-105 hover:bg-neutralLightGray hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-red-500 mb-4">State-of-the-Art Equipment</h4>
            <p className="text-sm text-neutralGrey leading-6">
              FutureCent Gym offers top-of-the-line fitness equipment to ensure you get the most out of your workout. From cardio machines to strength training, we have everything you need.
            </p>
          </div>

          {/* Supportive Community */}
          <div className="bg-neutralSilver p-6 rounded-lg shadow-md w-full md:w-1/3  hover:scale-105 hover:bg-neutralLightGray hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-red-500 mb-4">Supportive Community</h4>
            <p className="text-sm text-neutralGrey leading-6">
              Join a community of like-minded individuals who motivate and support each other. Whether you're new to fitness or a seasoned athlete, you'll feel at home here.
            </p>
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-7 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-all duration-300 hover:-translate-y-4">
            Join Us Today
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <h2 className="text-4xl text-center text-neutralDGrey font-semibold mb-12">What Our Members Say</h2>

      {/* Testimonial 1 */}
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12  ">
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md w-full md:w-1/3  hover:scale-105 hover:bg-neutralLightGray hover:shadow-lg transition-all duration-300">
          <p className="italic text-neutralGrey mb-4 leading-6">
            "The trainers at FutureCent Gym are phenomenal! I've achieved results I never thought possible."
          </p>
          <h4 className="text-lg font-semibold text-red-500">– Sarah Johnson</h4>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md w-full md:w-1/3  hover:scale-105 hover:bg-neutralLightGray hover:shadow-lg transition-all duration-300">
          <p className="italic text-neutralGrey mb-4 leading-6">
            "The group classes are so much fun, and the community is incredibly supportive at FutureCent Gym."
          </p>
          <h4 className="text-lg font-semibold text-red-500">– Mike Anderson</h4>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-neutralSilver p-6 rounded-lg shadow-md w-full md:w-1/3  hover:scale-105 hover:bg-neutralLightGray hover:shadow-lg transition-all duration-300">
          <p className="italic text-neutralGrey mb-4 leading-6">
            "I’ve been a member of FutureCent Gym for a year, and it’s the best decision I’ve ever made for my health!"
          </p>
          <h4 className="text-lg font-semibold text-red-500">– Emily Davis</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
