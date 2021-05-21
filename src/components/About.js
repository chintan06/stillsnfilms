import React from 'react';
import {photographer} from '../assets/images';

const About = () => {
    return (
        <section id="about">
            <div className="container p-0">
                <div className="row align-items-center">
                    <div className="col">
                        <img src={photographer} class="img-fluid" alt="About Us" />
                    </div>
                    <div className="col text-col">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;