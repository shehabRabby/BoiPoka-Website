import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId == bookId);
  const {
    bookName,
    publisher,
    category,
    review,
    author,
    image,
    rating,
    totalPages,
    yearOfPublishing,
  } = singleBook;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row bg-white overflow-hidden mx-auto my-5 max-w-[1170px]">
        {/* Left Book Section */}
        <div className="w-full lg:w-[573px] flex items-center justify-center bg-gray-100 p-6 lg:p-10">
          <img
            src={image}
            alt="Book Cover"
            className="w-full max-w-[425px] h-auto lg:h-[564px] object-contain"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-[597px] p-6 lg:p-8 flex flex-col justify-between">
          {/* Book Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{bookName}</h2>
            <p className="text-gray-600 text-sm mb-4">By: {author}</p>
            <p className="text-gray-800 font-semibold mb-2">{category}</p>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1">Review:</p>
              <p className="text-gray-500 text-sm">{review}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-100 text-green-500 text-xs font-medium px-3 py-1 rounded-full">
                #Young Adult
              </span>
              <span className="bg-green-100 text-green-500 text-xs font-medium px-3 py-1 rounded-full">
                #Identity
              </span>
            </div>

            {/* Details */}
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-medium">Number of Pages:</span>{" "}
                {totalPages}
              </p>
              <p>
                <span className="font-medium">Publisher:</span> {publisher}
              </p>
              <p>
                <span className="font-medium">Year of Publishing:</span>{" "}
                {yearOfPublishing}
              </p>
              <p>
                <span className="font-medium">Rating:</span> {rating}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="w-full sm:w-auto px-6 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Read
            </button>
            <button className="w-full sm:w-auto px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
