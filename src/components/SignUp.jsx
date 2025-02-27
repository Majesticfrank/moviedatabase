import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth} from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ()=>{
    
    const initialvalues ={Email:"", Phone:"",Password:""}
    const [formvalues, setFormValues]=useState(initialvalues);
    const [errors, setErrors]=useState({});
    const [SuccessMessage, setSuccessMessage]=useState("")

    const handlechange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formvalues,[name]:value})

    }


    const validateFields =()=>{
        const newErrors={};

        if(! formvalues.Email){
            newErrors.Email="Email is required!";
        }
        if(!formvalues.Phone){
            newErrors.Phone="Phone Number reqquired!";
        }
        if(!formvalues.Password){
            newErrors.Password="Password is required!"
        } 
        setErrors(newErrors);
        return Object.keys(newErrors).length ===0;
        
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        if(!validateFields()){
            return;
        }
        try{
            await createUserWithEmailAndPassword(auth, formvalues.Email,formvalues.Password);
            setSuccessMessage('user registered successfully');
            setErrors("");
            setTimeout(()=>setSuccessMessage(""),3000);

            setFormValues({Email:"", Phone:"",Password:""});
        }catch(error){
            setErrors("error"+ error.message);
        }
        
        

    };
    
    return(
<div className="min-h-screen justify-center items-center flex">
            <img src="/Images/bg5.webp" alt="image" className="h-screen w-full object-cover absolute "/>
 
            <div className="absolute bg-gray-950  w-80 h-2/3 rounded-lg">
    <h4 className="text-2xl mt-5 ml-10 text-white text-center">ROYAL <span className="text-yellow-400 font-bold text-sm">TV</span></h4>
  <form action="" onSubmit={handleSubmit}>
    <input
      type="text"
      name="Email"
      value={formvalues.Email}
      onChange={handlechange}
      placeholder="Email"
      className="w-60 h-8 bg-gray-900 outline-0 border-2 border-blue-600 rounded-lg  mt-3 ml-10 text-white placeholder:text-sm font-bold pl-4"
    />
{errors.Email&& <p className="text-red-700 ml-10">{errors.Email}</p>} 
    <br />

<input
      type="number"
      name="Phone"
      value={formvalues.Phone}
      onChange={handlechange}
      placeholder="phone"
      className="w-60 h-8 bg-gray-900 outline-0 border-2 border-blue-600 rounded-lg  mt-3 ml-10 text-white placeholder:text-sm font-bold pl-4"
     
    />  {errors.Phone&& <p className="text-red-700 ml-10">{errors.Phone}</p>} <br />

    <input
      type="password"
      name="Password"
      value={formvalues.Password}
      onChange={handlechange}
      placeholder="Password"
      className=" w-60 h-8 bg-gray-900 border-2 border-blue-600 outline-0 rounded-lg  mt-3 ml-10 text-white placeholder:text-sm font-bold pl-4"
    />
     {errors.Password && <p className="text-red-700 ml-10">{errors.Password}</p>} 



<label class="flex items-center space-x-4 mt-10 ml-10">
  <input type="Checkbox" name="option" class="w-3 h-3 text-blue-500 cursor-pointer" />
  <span className="text-white font-normal text-sm">Remember Me</span>
</label>

<button type="submit" className="w-60 h-8 bg-yellow-500 rounded-md ml-10 mt-4 text-blue-800 font-bold text-md hover:bg-blue-800 hover:text-white">
  SIGN UP
</button>


{SuccessMessage && (
            <p className="text-green-500 text-sm text-center mt-4">
              {SuccessMessage}
            </p>
          )}
</form>


<p className="text-white text-sm ml-10 text-center mt-8"> Have an account? <span className="text-blue-500 text-sm hover:text-yellow-400"><Link to='/Login'>Sign In!</Link></span></p> 

</div> 

            
        </div>

    )
}

export default SignUp;