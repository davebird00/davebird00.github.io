import React from 'react';

export default function About() {
    return (
        <div className="about-container flex flex-wrap items-center justify-center min-h-screen pt-16 text-lg">
            <div className="flex flex-col md:flex-row items-center justify-start w-full max-w-6xl px-6">
                <figure className="w-1/2 md:w-1/4 mb-8 md:mb-0 md:mr-8">
                    <img
                        className="w-full h-auto rounded-full"
                        src={`${process.env.PUBLIC_URL}/assets/images/carmyandme.png`}
                        alt="daves pet"
                    />
                    <figcaption className="text-center mt-3">Carmy</figcaption>
                </figure>

                <div className="flex flex-col space-y-8 w-full md:w-2/3 text-wrap">
                    <p>Almost-Torontonian, inventor of awful puns, dog lover.</p>
                    <p>
                        I work for{' '}
                        <a
                            href="https://www.computershare.com/ca/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:underline relative z-10"
                        >
                            Computershare
                        </a>{' '}
                        as a Junior Software Developer.
                    </p>
                    <p>
                        In my free time you can find me golfing, climbing rocks, watching movies, listening to music, or cooking.
                    </p>
                    <p>I don't use social media much so shoot me an email if you need to get in touch!</p>
                </div>
            </div>
        </div>
    );
}
