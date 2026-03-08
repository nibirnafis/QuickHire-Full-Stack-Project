'use client'
import FilterSearch from '@/src/components/filterSearch';
import React from 'react';

const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <div>
            <FilterSearch></FilterSearch>
            {children}
        </div>
    );
};

export default layout;