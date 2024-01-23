import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div>
            <h2>All Chefs</h2>
            {
                chefs.map(chef=> <p
                    key={chef.id}
                >
                    <Link to={`/${chef.id}`}>{chef.chef_name}</Link>
                </p>)
            }
            
        </div>
    );
};

export default Chefs;
