import React from 'react';

interface IInput {
    name?: string;
    className?: string;
    onClick?: () => void; 
}

const Button: React.FC<IInput> = ({ name, className, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}  
            className={`${className} w-full bg-blue hover:bg-black text-white text-sm font-semibold shadow-sm py-3 rounded-full duration-300 ease-in`}
        >
            {name}
        </button>
    );
};

export default Button;
