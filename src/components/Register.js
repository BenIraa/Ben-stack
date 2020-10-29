import React, {useState} from 'react';
import Formregister from './Formregister';
import Formsuccess from './Formsuccess';

const Register = ()=>{
    const [isSubmited, setIsSubmited] = useState(false)
    function submitForm(){
        setIsSubmited(true);
    }
    return(
        <div>
            
            {!isSubmited ? <Formregister submitForm= 
            {submitForm} /> : <Formsuccess /> }
            {/* <Formsuccess /> */}
            </div>
            );
};
export default Register;
