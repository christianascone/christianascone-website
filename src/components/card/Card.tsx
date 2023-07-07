import React from 'react';

export const Card = ({ children }) => {
    return (
        <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-xl drop-shadow-xl p-4">
            {children}
        </div>
    );
};