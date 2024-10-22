import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {

  // আমরা এখন বুকমার্ক অংশে সিলেক্টেড ব্লগগুলোকে পাঠানোর জন্য এখানে লেভেল আপ করব। স্টেট ডিক্লেয়ার করব। এটাকে বলা হয় lift up the state

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    // console.log('bookmark adding soon');
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const [readingTime, setReadingTime] = useState(0);
  // here, the default value of total reading time is set to zero.

  const handleMarkAsRead = (id, time) => {
    // console.log('marking as read', time);
    setReadingTime(readingTime + time)
    // remove the read blog from bookmark
    console.log('remove bookmark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id!==id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark = {handleAddToBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks ={bookmarks} readingTime ={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
