import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../../Utilities/addToDB";
import Book from "../Book/Book";
import ReadBooks from "../Books/ReadBooks";

const ReadList = () => {

 const [readList,setReadList] = useState([]);
 const [sort,setSort] = useState("");
  const data = useLoaderData();
  useEffect(() => {
    const storedBookData = getStoreBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
    setReadList(myReadList)
  }, []);

  const handleSort = (sortType) =>{
    setSort(sortType);
    if(sortType === 'Pages'){
        const sortedByPage = [...readList].sort((a,b) => b.totalPages-a.totoalPages);
        setReadList(sortedByPage);
    }
    if(sortType === 'Rating'){
        const sortedByRating = [...readList].sort((a,b) => b.rating-a.rating);
        setReadList(sortedByRating);
    }
  }

  return (
    <div className="my-10">

      <div className=" text-center my-10">
        <details className="dropdown">
          <summary className="btn m-1 bg-green-300">Sort By : {sort ? sort:""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a onClick={()=>handleSort("Pages")} >Pages</a></li>
            <li><a onClick={()=>handleSort("Rating")}>Ratings</a></li>
          </ul>
       </details>
      </div>


      <Tabs>
        <TabList>
          <Tab>Read BookList</Tab>
          <Tab>My WishList</Tab>
        </TabList>

        <TabPanel>
          <h2 className="mt-10 mb-4 font-semibold">Read Book List {readList.length}</h2>
          {
            readList.map(bookItem => <ReadBooks key={bookItem.bookId} readBook={bookItem}></ReadBooks>)
          }
        </TabPanel>
        <TabPanel>
          <h2>My WishList</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
