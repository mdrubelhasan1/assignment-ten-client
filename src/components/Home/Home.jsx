import React from 'react';
import Chefs from '../Chefs/Chefs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Footer></Footer>
        </div>
    );
};

export default Home;