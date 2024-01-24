import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

import { Button } from 'react-bootstrap';

const RecipiDetails = ({ chef }) => {
    const { id, chef_name, years_of_experience, num_of_recipes,image_url } = chef;

    return (
        <div className='border border-primary-subtle rounded text-center'>
            <img style={{ height: '200px', width: ' 100%', }} className='rounded' src={image_url} alt="" />
            <h4>Name of Chef: {chef_name}</h4>
            <h5>Years of Experience: {years_of_experience}</h5>
            <h5>Number of Recipies: {num_of_recipes}</h5>
            <div className=''>
            <Link  to={`chefdata/${id}`}> <Button  variant="success">Wiew Recipie</Button></Link>
            </div>
           
        </div>
    );
};

export default RecipiDetails;