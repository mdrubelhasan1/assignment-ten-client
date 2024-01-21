import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

const Layout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;