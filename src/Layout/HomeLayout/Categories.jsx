import React, { use } from 'react';
import { NavLink } from 'react-router';


const Categories = ({CategoryPromise}) => {
    const categoryData = use(CategoryPromise)

    return (
        <div>
              <h1 className='font-bold '>All Category : {categoryData.length}</h1>
              <div className='grid grid-cols-1 gap-2'>
                  {
                    categoryData.map(category=><NavLink   to={`/categoryNews/${category.id}`} className={'hover:bg-gray-100 p-2 rounded-2xl btn bg-white border-0 '}
                       
                    key={category.id}>{category.name}</NavLink>)
                  }
              </div>

        </div>
    );
};

export default Categories;