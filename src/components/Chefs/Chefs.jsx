import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Chefs.css'
import { Container } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    console.log(chefs)

    useEffect(()=>{
        fetch('http://localhost:5000/chefdata')
        .then(res=>res.json())
        .then(data=> setChefs(data))
        .catch(error=>console.error(error))
    }, [])
    return (
        
         <Container>
             <div className='chefcontainer '>
          {
                chefs.map(chef=> <p
                    key={chef.id}
                >
                    <Link to={`/${chef.id}`}></Link>
                    <h3>Name of Chef: {chef.chef_name}</h3>
                    <h5>Years of Experience: {chef.years_of_experience}</h5>
                    <h5>Number of Recipies: {chef.num_of_recipes}</h5>
                </p>)
            }
          </div>
         </Container>
           
            
          
            
            
       
    );
};

export default Chefs;
