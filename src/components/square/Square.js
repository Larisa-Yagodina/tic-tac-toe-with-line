import React from 'react';

const style = {
    background: '#e8fcfc',
    border: '2px solid teal',
    fontSize: '50px',
    fontWeight: '800',
    cursor: 'pointer',
}

const Square = ({value, index, onClick}) => {

    return (
        <button
            data-testid={`square-${index}`}
            style={style}
            onClick={onClick}
            className={value && 'blocked-events'}
        >
            {value}
        </button>
    )
}

export default Square;
