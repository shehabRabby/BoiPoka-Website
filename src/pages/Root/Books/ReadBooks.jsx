import React from "react";

const ReadBooks = ({ readBook }) => {
  const {bookName, category, author, image, rating,publisher,yearOfPublishing,totalPages } = readBook;
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-[16px] shadow-sm border border-gray-300 overflow-hidden p-6 w-full max-w-[1170px] mx-auto transition hover:shadow-md mb-4">
      {/* Book Image */}
      <div className="flex items-center justify-center w-full md:w-[220px] bg-gray-50 rounded-[12px] p-6">
        <img
          src={image}
          alt="Book Cover"
          className="w-[160px] h-[210px] object-contain"
        />
      </div>

      {/* Book Info */}
      <div className="flex flex-col justify-center md:pl-8 mt-5 md:mt-0">
        <h2 className="text-[22px] font-semibold text-gray-800">{bookName}</h2>
        <p className="text-gray-600 mt-1 text-sm">By : {author}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-xs font-medium text-green-700 bg-green-100 rounded-full px-3 py-1">#Young Adult</span>
          <span className="text-xs font-medium text-green-700 bg-green-100 rounded-full px-3 py-1">#Identity</span>
        </div>

        {/* Publisher, Year, Pages */}
        <div className="flex flex-wrap gap-x-4 items-center text-gray-500 text-sm mt-3">
          <div className="flex items-center gap-1">
            <i className="fa-regular fa-building"></i>
            <span>Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fa-regular fa-calendar"></i>
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fa-regular fa-file"></i>
            <span>Page: {totalPages}</span>
          </div>
        </div>

        <div className="border-t border-gray-500 border-dashed mt-4">
        </div>
 
        {/* Category + Rating + Button */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-4 text-sm">
            <span className="bg-blue-50 text-blue-600 font-medium px-3 py-1 rounded-full">
              Category: {category}
            </span>
            <span className="bg-orange-50 text-orange-600 font-medium px-3 py-1 rounded-full">
              Rating: {rating}
            </span>

            <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-1 rounded-full transition">
            View Details
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
