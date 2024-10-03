import React from 'react';
import { RingLoader } from 'react-spinners';
import "./style.scss";

const LoaderRing = ({size}) => {
    return (
        <div className='loader'>
            <RingLoader size={size}/>
        </div>
    );
};

export default LoaderRing;