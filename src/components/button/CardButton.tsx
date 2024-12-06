import React from 'react';

interface IInput {
    name?: string;
    className?: string;
    onClick?: () => void;  // Add optional onClick handler for flexibility
}

const CardButton: React.FC<IInput> = ({ name, className, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}  // Use onClick if provided
            className={`${className} w-full bg-blue hover:bg-black text-white shadow-sm py-2 rounded-sm duration-300 ease-in`}
        >
            {name}
        </button>
    );
};

export default CardButton;
