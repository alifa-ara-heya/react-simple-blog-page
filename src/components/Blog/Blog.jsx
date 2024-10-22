import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog);
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`cover picture of the title- ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex '>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}
                        className='ml-2 text-red-400 text-2xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title} </h2>
            <p>
                {/* এখানে hashtagগুলো array আকারে আছে। তাই ম্যাপ করে পেলাম। যেহেতু তাদের আলাদা কোনো আইডি ছিল না, তাই ম্যাপের আরেকটা প্যারামিটার ব্যবহার করলাম যেখানে ম্যাপ লিস্টের এলিমেন্টগুলোর ইন্ডেক্সকে ব্যবহার করে */}
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href="">#{hashtag}</a></span>)
                }
            </p>
            <button
            onClick={()=>handleMarkAsRead(id, reading_time)}
            className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;