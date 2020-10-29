import React,{Component,useState,useEffect} from 'react';
import logo from '../logo.png';
import epr from '../img/epr.png';
import Navbar from '../components/Navbar.js';
import Formregister from '../components/Formregister';
import axios from 'axios';


function Body(){

  const [data, setData] = useState([]);

  const [count,setCount] = useState(0);
  const [loading,setLoading] = useState(false);
  const [housechurch,setHousechuch] = useState('Welcome to House Church Platform');
  const clickHandle = () =>{
       setLoading(true)
       setCount(+1)
       setHousechuch(housechurch+2)

       setTimeout(function(){
         setLoading(false);
       },3000)
      
       }
       //let fetch information
       useEffect( ()=>{
          // async await
         const response = axios.get('http://localhost:8000/reg/endpoints/')
        //  print(response);
         .then(res=>{
           setData(res.data);
           console.log(res)
         })
         .catch((err)=>{
           console.log(err)
         })
       },[]
       );
 
    return(
      <>
      <Navbar />
      
      <div className="bg-gray-400 ">


      <div className=" Slide">
       <div className="logo ">
        
      
          
        
        </div>
        </div>
        
        
{/*data-aos="flip-left"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" */}

     
</div>

      </>
    )
}

export default Body;