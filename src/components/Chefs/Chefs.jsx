import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Chefs.css'
import { Button, Container } from 'react-bootstrap';


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
                chefs.map(chef=> <p className='border border-primary text-center rounded p-4 bg-primary-subtle shadow'
                    key={chef.id}
                >
                    <Link to={`/${chef.id}`}></Link>
                    <img style={{height: '200px', width:' 100%',}} className='rounded' src={chef.image_url} alt="" />
                    <h4>Name of Chef: {chef.chef_name}</h4>
                    <h5>Years of Experience: {chef.years_of_experience}</h5>
                    <h5>Number of Recipies: {chef.num_of_recipes}</h5>
                  <Link to='/recipie'><Button variant="success">View Recipies</Button></Link>
                </p>)
            }
          </div>
         </Container>
           
            
          
            
            
       
    );
};

export default Chefs;
