import React from "react";
import gymImg from '../assets/gym.png';
import supplementsImg from '../assets/supplements.png';
import accessoriesImg from '../assets/accessories.png';

const Products = () => {
  return (
    <div>
      {/* Products Section */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <h2 className="text-4xl text-center text-neutralDGrey font-semibold mb-12">Fitness Products and Supplements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Gym Merchandise */}
          <div className="flex flex-col items-center bg-neutralSilver p-6 rounded-lg shadow-lg  hover:scale-105 hover:bg-neutralLightGray hover:shadow-lg transition-all duration-300">
            <img src={gymImg} alt="Gym Merchandise" className="w-40 h-40 mb-4" />
            <h3 className="text-xl font-semibold text-neutralDGrey mb-2">Gym Merchandise</h3>
            <p className="text-sm text-neutralGrey mb-4 text-center">
              Stylish and comfortable workout apparel to keep you motivated and focused.
            </p>
            <button className="px-5 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-all duration-300">
              Shop Now
            </button>
          </div>

          {/* Supplements */}
          <div className="flex flex-col items-center bg-neutralSilver p-6 rounded-lg shadow-lg  hover:scale-105 hover:bg-neutralLightGray hover:shadow-lg transition-all duration-300">
            <img src={supplementsImg} alt="Supplements" className="w-40 h-40 mb-4" />
            <h3 className="text-xl font-semibold text-neutralDGrey mb-2">Supplements</h3>
            <p className="text-sm text-neutralGrey mb-4 text-center">
              Protein powders, vitamins, and health drinks to fuel your fitness journey.
            </p>
            <button className="px-5 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-all duration-300">
              Shop Now
            </button>
          </div>

          {/* Accessories */}
          <div className="flex flex-col items-center bg-neutralSilver p-6 rounded-lg shadow-lg  hover:scale-105 hover:bg-neutralLightGray hover:shadow-lg transition-all duration-300">
            <img src={accessoriesImg} alt="Accessories" className="w-40 h-40 mb-4" />
            <h3 className="text-xl font-semibold text-neutralDGrey mb-2">Accessories</h3>
            <p className="text-sm text-neutralGrey mb-4 text-center">
              Essential items like resistance bands, water bottles, and gloves for effective workouts.
            </p>
            <button className="px-5 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-all duration-300">
              Shop Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
