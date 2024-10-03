import React from 'react';
import EmptyIcon from '../SVG/empty';
import "./style.scss";

const EmptyData = () => {
    return (
        <div className='empty-data'>
          
            <EmptyIcon/>
            <p>No Data</p>
        </div>
    );
};

export default EmptyData;