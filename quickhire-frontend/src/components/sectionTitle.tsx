import React from 'react';

const SectionTitle = ({t1, t2}) => {
    return (
        <p className='text-txt-1 font-clashDisplay font-semibold text-[2rem] md:text-5xl'>{t1}<span className='text-primary-2'>{t2}</span></p>
    );
};

export default SectionTitle;