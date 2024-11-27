import React, { useState, useEffect } from 'react';
import PongBall from './PongBall.tsx';

const messages = [
    "software developer",
    "ping pong athlete",
    "dog dad."
];

export default function Home() {
    const [text, setText] = useState("David Bird");  // Initial text state
    const [fade, setFade] = useState(false);  // State for controlling the fade effect

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setFade(false);

            // After fade-out, update the text
            setTimeout(() => {
                setText(messages[index]);
                setFade(true); 
                index = (index + 1) % messages.length; 
            }, 400);  // Wait for fade-out to complete (300ms)

        }, 2105);  // Update text every 3 seconds (3000ms)

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative w-full h-full">
            <div className="w-full h-full relative pt-16">
                <PongBall />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                <h1 className='text-center text-9xl p-8 font-extrabold [text-shadow:_0_8px_8px_rgb(0_0_0_/_0.3)]'>
                    DAVE BIRD
                </h1>
                <div className={`text-6xl text-center transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <h2>
                        {text}
                    </h2>
                </div>
            </div>
            <div className='tech-list fixed bottom-0 w-full flex flex-col items-end pr-11 pb-11 z-20'>
                <div className='text-black'>
                    Made with <a
                        href='https://react.dev/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-secondary hover:underline relative z-10'>react</a>, <a
                        href='https://threejs.org/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-secondary hover:underline relative z-10'>three.js</a>, and <a
                        href='https://tailwindcss.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-secondary hover:underline relative z-10'>tailwind css.</a>
                </div>
                <div className='text-black'>
                    Design inspiration from {' '}
                    <a 
                          href='https://www.shiyunlu.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-secondary hover:underline relative z-10'
                        >
                          Shiyun Lu
                    </a>
                </div>
            </div>
        </div>
    );
}