import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { UserContext } from '../../Utility/AuthContext/ContextProvider';


const Login = () => {
  const location = useLocation();
  const Navigate =useNavigate()
  const {handleLogin} = useContext(UserContext);
    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')
const handleSignIn = (e)=>{
  e.preventDefault();
setError('')
setSuccess('')
const form = e.target;

const email = form.email.value;
const password = form.password.value;
handleLogin(email,password).then(()=> {

  setSuccess('user Has successFully logedIn') ;
   Navigate(`${location.state? location.state:'/'}`)  }  )

.catch((error) => {
  setError(error.message)
 
 });
}
    return (
      <>
     
       <div className="hero bg-base-200 min-h-screen">
    
      
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

         <div className="card-body">
         <h1 className="text-5xl font-bold">Login now!</h1>
           <form onSubmit={handleSignIn} className="fieldset">
             <label className="label">Email</label>
             <input name='email' type="email" className="input" placeholder="Email" required  />
             <label className="label">Password</label>
             <input name='password' type="password" className="input" placeholder="Password" required />
             <div><Link to={'/auth/register'}>Don't Have an account? Register </Link></div>
             {success&& <p className='text-green-400 my-3'>{success}</p>}
             { error && <p className='text-red-400 my-3'>{error}</p>}
          
             <button  type='submit' className="btn btn-neutral mt-4">Login</button>
           </form>
         </div>
       </div>
     </div>
      
      </>
       
   
    );
};

export default Login;