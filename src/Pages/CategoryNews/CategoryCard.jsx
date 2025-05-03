import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";
import { IoBookmark } from "react-icons/io5";
import { Link } from "react-router";

const CategoryCard = ({ newsdata }) => {
  
  const {
    title,
    thumbnail_url,
    author,
    details,
    total_view,
    rating,
    tags,
    id
  } = newsdata;
 

  return (
    <>
    
     <div className="card bg-base-100 shadow-md border p-4">
        
        {/* Author + Share Icon */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{author.name}</p>
              <p className="text-sm text-gray-500">{format(new Date(author.published_date), "yyyy-MM-dd")}</p>
            </div>
          </div>
          <span className="flex gap-2">
            <IoBookmark size={20}/>
            <FaShareAlt className="text-xl text-gray-500 cursor-pointer" />
          </span>
        </div>
  
        {/* Title */}
        <h2 className="text-lg font-bold leading-snug mb-2">
          {title}
        </h2>
  
        {/* Image */}
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full h-56 object-cover rounded-lg mb-3"
        />
  
        {/* Details */}
        <p className="text-sm text-gray-600 mb-2">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}... <Link to={`/news/${id}`} className="text-orange-500 font-semibold cursor-pointer">Read More</Link>
            </>
          ) : (
            details
          )}
        </p>
  
        {/* Rating & Views */}
        <div className="flex justify-between items-center pt-2 border-t my-8">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-black ml-1">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </>
   
  );
};

export default CategoryCard;
