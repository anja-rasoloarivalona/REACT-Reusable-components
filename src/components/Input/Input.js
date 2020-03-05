import React from 'react';
import './Input.css';

const Input = props => {
    return (
        <div className={`input ${props.className}`}>

                {/*-----BASIC INPUT--------*/}
                {props.control === 'input' && (
                        <input className="input__field" 
                               type={props.type} //text, email, password...
                               id={props.id}
                               required={props.required}
                               value={props.value}
                               placeholder={props.placeholder}
                               autoComplete= {props.autoComplete}
                               onChange={e => props.onChange(props.id, e.target.value)}
                        />
                )}

                {/*----TEXTAREA INPUT--------*/}
                {props.control === 'textarea' && (
                        <textarea className="textarea"
                            id={props.id}
                            required={props.required}
                            value={props.value}
                            onChange={e => props.onChange(props.id, e.target.value)}
                            placeholder={props.placeholder}
                        />
                )}


                {/*--------INPUT LABEL-----------*/}
                {props.label && (
                        <label htmlFor={props.id} className="input__label">{props.label}</label>
                )}
        </div>
    )
}

export default Input;