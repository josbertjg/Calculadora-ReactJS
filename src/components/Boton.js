import React from 'react';
import '../styles/Boton.scss';

function Boton(props){

    const isOperator=(value)=>isNaN(value) && value!='.' && value!='=';

    return (
        <div onClick={()=>props.handleClick(props.children)} className={`boton ${isOperator(props.children) ? 'operator' : ''}`.trim()}>
            {props.children}
        </div>
    ); 
};

export default Boton;