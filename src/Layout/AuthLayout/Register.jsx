import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { UserContext } from '../../Utility/AuthContext/ContextProvider';


const Register = () => {
  const navigate = useNavigate();
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const [nameError,setNameError] = useState('')
  const [PasswordError,setPasswordError] = useState('')
  const { handleRegister,UpdateUser,setCurrentUser} = useContext(UserContext);


const handleSignUp =(e)=>{
e.preventDefault();
setError('')
setSuccess('')
const form = e.target;
const name = form.name.value;
if(name.length<5){
  setNameError('Name should be longer than 5 character');
  return
}
else{
  setNameError('')
}

const photo = form.photo.value;
const email = form.email.value;
const password = form.password.value;
if(password.length<6){
  setPasswordError('password should be longer than 6 character');
  return
}
else{
  setPasswordError('')
}
handleRegister(email,password)
.then((result)=>{
 const newUser = result.user;
 UpdateUser({DisplayName: name,photoURL:photo}).then(()=>{
  setCurrentUser ({...newUser,DisplayName: name,photoURL:photo});
  setSuccess('User Created Successfully')
  
  navigate('/')
 }).catch(error=>{
  console.log(error);
  setCurrentUser(newUser);
 })
  
})
.catch((error) => {
 setError(error.message)

});
}

    return (
      <>
    
           <div className="hero bg-base-200 min-h-screen">
       
      
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <div className="card-body">
         <h1 className="text-5xl font-bold">Register Now !</h1>
           <form onSubmit={handleSignUp} className="fieldset">
             <label className="label">Your Name</label>
             <input type="text" name='name' className="input" placeholder="Enter your name" />
             {
              nameError&& <p className='text-red-400 text-xs'>{nameError}</p>
             }
             <label className="label">Photo url</label>
             <input type="text" name='photo' className="input" placeholder="Enter your photo url" />
             <label className="label">Email</label>
             <input type="email" name='email' className="input" placeholder="Email" />
             <label className="label">Password</label>
            
             <input type="password" name='password' className="input" placeholder="Password" />
             {
              PasswordError&& <p className='text-red-400 text-xs'>{PasswordError}</p>
             }
             <div> <Link to={'/auth/login'}> Already have an account? Login</Link></div>
             {success&& <p className='text-green-400 my-3'>{success}</p>}
             {error&& <p className='text-red-400 my-3'>{error}</p>}
             <button type='submit' className="btn btn-neutral mt-4">Register</button>
            
           </form>
         </div>
       </div>
     </div>
      </>
   
    );
};

export default Register;