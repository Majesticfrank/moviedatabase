import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth} from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



const Login=()=>{

   const initialvalues ={Email:"",Password:""}
  const [formvalues, setFormValues]=useState(initialvalues);
  const [message, setMessage]=useState("");


  const handlechange=(e)=>{
    const {name,value}=e.target;
    setFormValues({...formvalues,[name]:value})

}

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, formvalues.Email, formvalues.Password);
      setMessage("Login Successful");
  
      setFormValues({Email:"",Password:""});

    }catch(error){
      setMessage("Error:"+error.message);

    }



  };
  
  


    return(

        <div className="min-h-screen justify-center items-center flex">
            <img src="/Images/bg4.webp" alt="image" className="h-screen w-full object-cover absolute "/>
 
            <div className="absolute bg-gray-950  w-80 h-2/3 rounded-lg">
            <h4 className="text-2xl mt-5 ml-10 text-white text-center">ROYAL <span className="text-yellow-400 font-bold text-sm">TV</span></h4>
    <form action="" onSubmit={handleSubmit}>
      <input
      type="text"
      name="Email"
      value={formvalues.Email}
      onChange={handlechange}
      
      placeholder="Email"
      className="w-60 h-8 bg-gray-900 outline-0 border-2 border-blue-600 rounded-lg  mt-16 ml-10 text-white placeholder:text-sm font-bold pl-4"
    /> <br />

    <input
      type="password"
      name="Password"
      value={formvalues.Password}
      onChange={handlechange}
     
      placeholder="Password"
      className=" w-60 h-8 bg-gray-900 border-2 border-blue-600 outline-0 rounded-lg  mt-10 ml-10 text-white placeholder:text-sm font-bold pl-4"
    />


<label class="flex items-center space-x-4 mt-10 ml-10">
  <input type="Checkbox" name="option" class="w-3 h-3 text-blue-500 cursor-pointer" />
  <span className="text-white font-normal text-sm">Remember Me</span>
</label>

<button type="submit" className="w-60 h-8 bg-yellow-500 rounded-md ml-10 mt-4 text-blue-800 font-bold text-md hover:bg-blue-800 hover:text-white">
  SIGN IN
</button>

<p className="text-white text-sm ml-10 text-center mt-8">Don't Have an account? <span className="text-blue-500 text-sm hover:text-yellow-400"><Link to='/SignUp'>Sign up!</Link></span></p> 
<p className="text-center text-blue-500 mt-2 text-sm hover:underline"><Link to='/ForgotP'>Forgot Password?</Link></p>
</form>
{message && <p className="text-center text-white mt-4">{message}</p>}
</div> 

            
        </div>
    )

}
export default Login;