const getStoreBook = () => {
  const storeBookStr = localStorage.getItem("readList");
  if (storeBookStr) {
    const storedBookData = JSON.parse(storeBookStr);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
    const storedBookData = getStoreBook();
    if(storedBookData.includes(id)){
        alert("Book Already exist")
    }else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList',data)
    }
};

export {addToStoredDB,getStoreBook};
