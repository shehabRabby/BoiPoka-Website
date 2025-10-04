import React from "react";

import { MdStarHalf } from "react-icons/md";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
    // console.log(singleBook);
  const {bookId, bookName,publisher,category, author, image,rating } = singleBook;

  return (
    <div className="w-[374px]  p-[20px] rounded-[16px] border border-black/15 flex flex-col justify-between shadow-sm">

      <Link to={`/bookDetails/${bookId}`}>
       <div className="w-[326px] h-[230px] bg-[#f3f3f3] flex justify-center items-center mx-auto rounded-[8px]">
         <img src={image} alt="Book Cover" className="w-[134px] h-[166px] object-contain"/>
       </div>
      </Link>

    
      <div className="flex gap-2 mt-4">
        <span className="bg-green-100 text-green-500 font-semibold text-sm px-3 py-1 rounded-full">Young Adult</span>
        <span className="bg-green-100 text-green-500 font-semibold text-sm px-3 py-1 rounded-full">Identity</span>
      </div>

      
      <div className="mt-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-900 font-serif">{bookName}</h2>
        <p className="text-sm text-gray-600 mt-1">Author: {author}</p>
      </div>


      <div className="mt-auto flex justify-between items-center text-sm text-gray-700 border-t border-dashed border-gray-400 ">
        <div className="mt-3"><span>{category}</span></div>
        <span className="flex justify-center items-center gap-2">{rating} <MdStarHalf /></span>
      </div>

    </div>
  );
};

export default Book;
