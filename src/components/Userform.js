import React,{Component,useState,useEffect} from 'react';

const Userform = (validateinfo)=>{
    const [values, setValues] = useState({
        firstname:'',
        lastname:'',
        email:'',
        telphone:'',
    
})

const [errors, setErrors] = useState({});
const [isSubmiting, setIsSubmiting] = useState(false)

const handleChange = e => {
    const {name, value} = e.target
    setValues({
        ...values,
        [name]: value
    });
};
const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateinfo(values));
    setIsSubmiting(true);
};
return {handleChange, values, handleSubmit, errors};



};
export default Userform;

