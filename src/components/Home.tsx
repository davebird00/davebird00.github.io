import React, { useState, useEffect } from 'react';
import Shine from './Shine.tsx';

const messages = [
    "software developer",
    "video game enjoyer",
    "dog dad"
];

export default function Home() {
    const [text, setText] = useState("David Bird");
    const [fade, setFade] = useState(false);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setText(messages[index]);
                setFade(true); 
                index = (index + 1) % messages.length; 
            }, 400); 

        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative w-full h-full pt-16">
            <div className="w-full h-full relative">
                <Shine />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                <h1 className='text-center text p-8 text-vw-10 font-extrabold [text-shadow:_0_8px_8px_rgb(0_0_0_/_0.3)]'>
                    DAVE BIRD
                </h1>
                <div className={`text-vw-5 text-center transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <h2>
                        {text}
                    </h2>
                </div>
            </div>
            <div className='tech-list text-black fixed bottom-0 w-full flex flex-col items-end pr-11 pb-11 z-20'>
                <div>
                    Made with{' '}
                    <a
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
                        className='text-secondary hover:underline relative z-10'>
                            tailwind css
                    </a>
                </div>
                <div>
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