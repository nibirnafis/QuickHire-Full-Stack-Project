import React from 'react';

const Button = ({title, bg, text}) => {
    return (
        <div>
            <button className={`${bg} ${text} py-3 px-6`}>
                {title}
            </button>
        </div>
    );
};

export default Button;