import React from 'react';
import './TodoIcon.css';
import { FiCheckCircle as Check } from 'react-icons/fi';
import { AiFillDelete as Delete } from 'react-icons/ai';

const iconTypes = {
    "check": color => (<Check className="Icon-svg Icon-svg--check" fill={color} />),
    "delete": color => (<Delete className="Icon-svg Icon-svg--delete" fill={color} />)
};

function TodoIcon({ type, color = 'gray', onClick }) {
    return(
        <span className={`Icon-container Icon-container--${type}`} onClick={onClick}>{iconTypes[type](color)}</span>
    );
}

export { TodoIcon };