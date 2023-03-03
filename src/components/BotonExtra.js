import React from 'react';
import '../styles/BotonExtra.scss';

function BotonExtra(props){
    return (
        <button onClick={props.handleClick} className={`btnExtra ${props.children}`}>{props.children}</button>
    );
};

export default BotonExtra;