import React from 'react';
// import Navbar from '../Navbar';
// import Footer from './../Footer';

const Container = (props) => {
    return (
        <div>
            {/* <Navbar /> */}
            {props.children}
            {/* <Footer /> */}
        </div>
    );
};

export default Container;
