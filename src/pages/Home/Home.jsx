import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Products from './Products';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;