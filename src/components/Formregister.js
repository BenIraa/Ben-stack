import React,{Component,useState} from 'react';
import  '../css/tailwindcss.css';
import App from '../App';
import Userform from './Userform';
import Validateinfo from './Validateinfo';
import '../css/formcss.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const FormSignup = (submitForm) => {
    const handleForm =(e)=>{
        e.preventDefault();
        const data={
            // "firstname":firstname,
            // "lastname":lastname,
            // "phone":telphone,            // "telphone":telphone,
            // "password":password,
            // "password2":password2,
            
        }
        axios.post("http://localhost:8000/reg/endpoints/",data)
        .then((res)=>{
            console.log(res.data)
        }
        )
        .catch((err)=>{
            console.log(err)
        }
        )

        
    }


    const { handleChange, values , handleSubmit , errors} = 
    Userform(Validateinfo,
             submitForm
             );
            return(
                <>
                <Navbar/>
        
            <div className="p-4 bg-gray-100 rounded-lg bg w-50 form-conent-right">
            <form className="p-12 from" onSubmit={handleSubmit}>
                <h3>Join Us</h3>
                <div className="form-inputs">
                    <label htmlFor="first name" className="form-label">
                    First name
                    </label>
                    <input className="w-full" type="text" placeholder="beniraa@gmail.com"
                    id="firstname" 
                    name="firstname" 
                    className="from-input"
                    placeholder="Enter Your First Name"
                    value={values.firstname}
                    onChange={handleChange}
                    />
                    {errors.firstname && <p>{errors.firstname}</p>}
                    </div>
                    <div className="form-inputs">
                    <label htmlFor="first name" className="form-label">
                    Last name
                    </label>
                    <input className="" type="text" placeholder="beniraa@gmail.com" type="text"
                    id="lastname"  
                    name="lastname" 
                    className="from-input"
                    placeholder="Enter Your last Name"
                    value={values.lastname}
                    onChange={handleChange}
                    />
                   {errors.lastname && <p>{errors.lastname}</p>}
                    </div>
                    
                    <div className="form-inputs">
                    <label htmlFor="first name" className="form-label">
                    Telphone
                    </label>
                    <input className="form-input" type="text" placeholder="beniraa@gmail.com" type="text"
                    id="telphone"  
                    name="telphone" 
                    className="from-input"
                    placeholder="Enter Your Telphone"
                    value={values.telphome}
                    onChange={handleChange}
                    />
                    {errors.telphone && <p>{errors.telphone}</p>}
                    </div>
                    <div className="form-inputs">
                    <label htmlFor="first name" className="form-label">
                    Password
                    </label>
                    <input ClassName="form-input" type="text" placeholder="beniraa@gmail.com" type="password"
                    id="password"  
                    name="password" 
                    className="from-input"
                    placeholder="Enter Your password"
                    value={values.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className="form-inputs">
                    <label htmlFor="first name" className="form-label">
                    Password
                    </label>
                    <input className="form-input" type="text" placeholder="beniraa@gmail.com" type="password"
                    id="password2"  
                    name="password2" 
                    className="from-input"
                    placeholder="Enter Your password"
                    value={values.password2}
                    onChange={handleChange}
                    />
                    {errors.password && <p>{errors.passwrord}</p>} 
                    </div>
                    <button className="form-input-btn " type="submit">Sign Up</button>
                    <span className="from-input-login">
                        Already have account Login <a href="#">Here</a>
                    </span>
                    
                    
            </form>
        </div>
        </>

    );
};
export default FormSignup;