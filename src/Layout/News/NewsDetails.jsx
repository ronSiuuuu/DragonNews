import React from 'react';
import Header from '../HomeLayout/Header';
import RightLayout from '../HomeLayout/RightLayout';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const NewsDetails = () => {
    const Navigate = useNavigate();
    const news = useLoaderData();
    const {id} = useParams();
   
    
        const selectedNews = news.find(selected=>selected.id==id);
        
   

    return (
        <div>
          <Header></Header>
          <h2 className='font-bold my-2 ml-14'>News Details</h2>
          <div className='grid grid-cols-12 gap-5 w-11/12 mx-auto my-6'>
         
              <div className='col-span-9 space-y-3 '>
               <img className='w-full h-[350px] object-cover' src={selectedNews.image_url} alt="" />
               <h2 className='font-bold'>{selectedNews.title}</h2>
               <p >{selectedNews.details}</p>
               <button onClick={()=>Navigate(`/categoryNews/${selectedNews.category_id}`)} className='btn btn-secondary'>All news in this category</button>
              </div>
              <div className='col-span-3'>
                  <RightLayout></RightLayout>
              </div>
          </div>
        </div>
    );
};

export default NewsDetails;