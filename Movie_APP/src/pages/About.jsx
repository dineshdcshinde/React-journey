import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Moviefy</h1>
                <p>Discover, personalize, and connect with your favorite movies!</p>
            </header>
            <main className="about-main">
                <section className="about-section">
                    <h2>Discover New Movies</h2>
                    <p>Explore a vast collection of movies tailored to your preferences. Stay updated with the latest releases, trending films, and genres that suit your taste.</p>
                </section>
                <section className="about-section">
                    <h2>Personalized Experience</h2>
                    <p>Get recommendations based on your watch history and preferences. Moviefy adapts to your tastes, ensuring a seamless and personalized movie-watching journey.</p>
                </section>
                <section className="about-section">
                    <h2>Community Driven</h2>
                    <p>Join a community of movie enthusiasts. Share your reviews, rate movies, and connect with like-minded users who share your passion for films.</p>
                </section>
            </main>
        </div>
    );
};

export default About;
