import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../../public/assets/user.png'
import { UserContext } from '../../Utility/AuthContext/ContextProvider';


const Navbar = () => {
  const {logOut} = useContext(UserContext);
  const handleLogout =()=>{
    logOut();
  }
  const {CurrentUser} = useContext(UserContext);
  // const location = useLocation(); 

  
  // const isAuthPage = location.pathname === '/auth/login' || location.pathname === '/auth/register';
 
    return (
       <nav className='flex justify-between items-center my-6 w-11/12 mx-auto'>
  <div> 
    {CurrentUser && <p>{CurrentUser.email}</p>}
  </div>
  <ul className='flex gap-3'>
    <NavLink to={'/categoryNews/1'} >
        Home
    </NavLink>
    <Link>About</Link>
    <Link>Carrier</Link>
  </ul>
  <div className='flex items-center gap-2'>
    <Link to={ '/auth/register'}><img className='w-12 h-12 rounded-full avatar' src={`${CurrentUser? CurrentUser.photoURL : userIcon }`} alt="" /></Link>
    {
  CurrentUser 
    ? <Link to={'/auth/login'}><button onClick={handleLogout} className='btn btn-primary'> logOut</button></Link> 
    : <Link to={'/auth/login'}><button className='btn btn-primary'>LogIn</button></Link>
}
   
  </div>

       </nav>
    );
};

export default Navbar;