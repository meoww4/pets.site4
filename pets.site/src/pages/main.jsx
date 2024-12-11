import React from 'react';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Cart1 from '../components/cart1';
import Cart2 from '../components/cart2';
import Slider from '../components/slider';


const Main = () => {
    return (
        <div>
            <Slider/>
            <Two/>
            <Cart1/>
            <Cart2/>
            <Three/>
        </div>
    );
};

export default Main;