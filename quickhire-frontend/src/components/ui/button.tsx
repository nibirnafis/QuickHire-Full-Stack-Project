import React from 'react';

const Button = ({title, bg, text}:{title: string, bg: string, text: string}) => {
    return (
        <div>
            <div className={`${bg} ${text} py-3 px-6`}>
                {title}
            </div>
        </div>
    );
};

export default Button;