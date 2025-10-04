import React from 'react';
import BannerImg from "../../../assets/banerimg.png";

const Banner = () => {
    return (
         <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow p-8 md:p-12 max-w-5xl mx-auto">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
          Books to freshen up <br /> your bookshelf
        </h2>

        <button className="mt-6 px-6 py-3 rounded-lg text-white font-semibold 
          bg-gradient-to-r from-green-500 to-[#006a4e] 
          hover:from-green-600 hover:to-[#005c43] 
          transition-all duration-300">
          View The List
        </button>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={BannerImg}
          alt="Book cover"
          className="w-52 md:w-64 object-contain drop-shadow-lg"
        />
      </div>
    </div>
    );
};

export default Banner;