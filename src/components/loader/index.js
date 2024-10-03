import React from 'react';
import { PacmanLoader } from 'react-spinners';
import "./style.scss";

const Loader = ({size}) => {
    return (
        <div className='loader'>
            <PacmanLoader  size={size}/>
        </div>
    );
};

export default Loader;