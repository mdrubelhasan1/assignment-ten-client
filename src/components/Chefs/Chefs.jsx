import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Chefs.css'
import { Button, Container } from 'react-bootstrap';
import RecipiDetails from '../RecipieDetails/RecipiDetails';


const Chefs = () => {
   
    const [chefs, setChefs] = useState([]);
    console.log(chefs)

    useEffect(()=>{
        fetch('https://assignment-ten-server-tawny.vercel.app/chefdata')
        .then(res=>res.json())
        .then(data=> setChefs(data))
        .catch(error=>console.error(error))
    }, [])

    

    return (
        
         <Container>
             <div className='chefcontainer '>
          {
                chefs.map(chef=><RecipiDetails
                key={chef.id}
                chef={chef}
                ></RecipiDetails>)
            }
          </div>
         </Container>
           
            
          
            
            
       
    );
};

export default Chefs;
