import React from 'react';

export default function About() {
    return(
        <div className="about-container flex items-center justify-center min-h-screen pt-16 text-lg">
            <figure>
                <img
                    className='w-64 h-64 rounded-full'
                    src={`${process.env.PUBLIC_URL}/assets/images/carmyandme.png`}
                    alt='daves pet' 
                />
                <figcaption className='text-center m-3'>Carmy</figcaption>
            </figure>

            <div className='flex-row space-y-8 pl-11 w-1/4 text-wrap'>
                <p>
                    Almost-Torontonian, inventor of awful puns, dog lover.
                </p>
                <p>
                    I work for <a href="https://www.computershare.com/ca/en"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-secondary hover:underline relative z-10'>Computershare</a> as a Junior Software Developer.
                </p>
                <p>
                    In my free time you can find me golfing, watching movies, listening to music, or cooking.
                </p>
                <p>
                    I don't use social media much so shoot me an email if you need to get in touch!
                </p>
            </div>
        </div>
    );
};
