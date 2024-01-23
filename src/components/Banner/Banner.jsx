import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [photos, setPhotos] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:5000/bannerphoto')
            .then(res => res.json()
                .then(data => setPhotos(data)))
            .catch(error => console.log(error))
    }, [])

   
    return (
        <div className='pt-4'>

            {
                photos.map(photo => <div
                    key={photo.id}
                >
                    <Link to={`/${photo.id}`}></Link>
                    <Container>
                        <Carousel>
                            <Carousel.Item>
                                <img style={{height: '500px', width: '100%', marginBottom: '50px'}} src={photo.image_url} alt="" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </div>)
            }

        </div>

    );
};

export default Banner;