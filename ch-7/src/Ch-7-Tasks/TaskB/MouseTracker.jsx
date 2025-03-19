import React, { useState, useEffect } from 'react';

export default function MouseTracker({ render }) {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        //tracking use x and y 
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            //it is use to remove event listener
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return render(mousePosition);
}