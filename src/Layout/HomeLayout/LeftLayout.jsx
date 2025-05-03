
import { Suspense } from 'react';
import Categories from './Categories';

const LeftLayout = () => {
   
const CategoryPromise = fetch('/categories.json').then(res=>res.json())

 
   
    return (
        <div>
            <Suspense fallback={<p>loading.....</p>} >
            <Categories CategoryPromise={CategoryPromise}></Categories>
            </Suspense>
      

        </div>
    );
};

export default LeftLayout;