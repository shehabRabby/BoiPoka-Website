import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Header/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;