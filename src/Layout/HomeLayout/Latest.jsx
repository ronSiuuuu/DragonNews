import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex gap-2 justify-center items-center  bg-gray-100 p-3'>
            <button className='btn btn-primary'>Latest</button>
           
          
            <Marquee className='flex' speed={60} pauseOnHover={true}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est 
                nobis voluptas ea exercitationem?  tempore optio ipsam autem </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est 
                nobis voluptas ea exercitationem?  tempore optio ipsam autem </p>
            </Marquee>
        </div>
    );
};

export default Latest;