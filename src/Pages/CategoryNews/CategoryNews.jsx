import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CategoryCard from "./CategoryCard";


const CategoryNews = () => {
  const allNews = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState([]);
  
  useEffect(() => {
  
    if (id == "0") {
      setNews(allNews);
      return;
    } else if (id == "1") {
      const filterdNews = allNews.filter(
        (news) => news.others.is_today_pick== true
      );
      setNews(filterdNews);
    }
    else{
        const filterdNews = allNews.filter((news) => news.category_id == id);
        setNews(filterdNews);
    }
  }, [id,allNews]);

 

  return (
    <div>
      <h1 className="my-3">Total  {news.length}  News found</h1>
     <div className="grid grid-cols-1 gap-2">
         {
            news.map(newsdata=><CategoryCard key={newsdata.id} newsdata={newsdata}></CategoryCard>)
         }
     </div>
    </div>
  );
};

export default CategoryNews;
