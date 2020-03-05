import React from 'react';
import './Button.css';
import { Link  } from 'react-router-dom'

const Button = props =>  props.link ? 
    (//if the link props is added, the link component is rendered
        <Link 
            className={`button ${props.customClass}`}
            to={props.link}
            onClick={props.onClick}
        >
                {props.children}
        </Link>
       
    ) :
    (//if there is no link props, the button is rendered
        <button
            className={`button ${props.customClass}`}
            onClick={props.onClick}
            disabled={props.disabled || props.loading}
            type={props.type}
        >
            {props.children}
        </button>
    )

export default Button
