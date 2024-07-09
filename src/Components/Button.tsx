import React from 'react'


interface ButtonProps {
    text: string,
    link: string,
    image: string,
}

const Button: React.FC<ButtonProps> = ({text, link, image}) => {
    return (
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
        h-8 flex flex-row items-center gap-2`}
        onClick={() => {
            window.open(link, '_blank')
        }}>
            <img src={image} alt="icon" className="w-6 h-6 inline-block" />
            {text}
        </button>
    )
}
export default Button
