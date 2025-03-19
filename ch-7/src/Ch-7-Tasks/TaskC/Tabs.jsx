import React, { useState } from 'react'

export default function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <>

            <div className='bg-dark '>
                {React.Children.map(children, (child, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
                        className='m-2 bg-light'
                    >
                         {child.props.label} 
                    </button>
                ))}
            </div>
            <div>
                {React.Children.map(children, (child, index) => (
                    <div style={{ display: activeTab === index ? 'block' : 'none' }}>
                     <h1>   {child}</h1>
                    </div>
                ))}
            </div>

        </>
    )
}
