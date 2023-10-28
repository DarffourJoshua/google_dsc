import React from 'react';

export default function Image(props) {
    return (
        <img 
            src={`./images/${props.icon}`} 
            className="card--favorite"
            onClick={props.toggleFavorite}
            alt='star'
        />
    )
}