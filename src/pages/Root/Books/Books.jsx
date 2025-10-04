import React, { Suspense, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
    const[allBooks,setAllBooks] = useState([]);
    // console.log(data);
  return (
    <div>
      <div>
        <h1 className="text-center font-serif font-bold text-2xl my-5">Books</h1>
      </div>
      
        <Suspense fallback={<span>Loading Books........</span>}>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-20 mx-auto my-10">
            {
               data.map((singleBook) => <Book key={singleBook.bookID} singleBook={singleBook}></Book>)
            }
          </div>
        </Suspense>
      
    </div>
  );
};

export default Books;
