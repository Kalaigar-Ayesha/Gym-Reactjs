import React from "react";
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <div>
      {/* About Section */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="About Us" className="w-80 h-80 rounded-lg shadow-lg" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Transform Your Body and Mind at FutureCent Gym
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              At FutureCent Gym, we believe fitness is not just about physical strength but mental fortitude. Join us to unlock your full potential with expert trainers, cutting-edge equipment, and a motivating community.
            </p>
            <button className="px-7 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-all duration-300 hover:-translate-y-4">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Company Stats Section */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Join Over <span className="text-red-500">2 Million Members</span> Who Trust FutureCent Gym!
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Whether you're looking to lose weight, gain strength, or improve mental clarity, FutureCent Gym provides the resources and community support to help you succeed.
            </p>
          </div>

          {/* Stats Section */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/hands.png" alt="Members" className="w-14 h-14 object-contain" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">2,966,762</h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/click.png" alt="Event Bookings" className="w-14 h-14 object-contain" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">5,124</h4>
                  <p>Event Bookings</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/people.png" alt="Clubs" className="w-14 h-14 object-contain" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">150+</h4>
                  <p>Clubs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/pay.png" alt="Payments" className="w-14 h-14 object-contain" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">$2,966,762</h4>
                  <p>Payments Processed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
