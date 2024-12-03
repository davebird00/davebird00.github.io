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
                    <div className='flex flex-row space-x-5'>
                        <p>Heya!</p>
                        <p> &#128075;</p>
                    </div>
                    <p>Thanks for checking my site out. I'm Dave, an almost-Torontonian software developer.</p>
                    <p>
                        I got a job! As of January 2025 I'll be working for{' '}
                        <a
                            href="https://www.computershare.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:underline relative z-10"
                        >
                            Computershare
                        </a>.
                    </p>
                    <p>
                        When I'm not working, you can find me golfing, climbing rocks, watching movies, gaming, listening to music, or cooking with my partner.
                    </p>
                    <p>
                        Although I don't use social media much, shoot me an email if you'd like to get in touch!
                    </p>
                </div>
            </div>
        </div>
    );
}
