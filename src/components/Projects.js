import React from 'react';
import '../styles/Projects.scss'

function Projects() {
    return (
        <section className="projects">
            <h1>Shameless plugs for friends and family:</h1>
            <article>
                <a href="https://open.spotify.com/artist/6JG7KTQYlmrrMg5an1WjFD">Saint Sterling</a>
                <p>A few of my friends decided to make a band and it's pretty great. Check out their first EP on Spotify and give them a follow on social media!</p>
            </article>
            <hr></hr>
            <article>
                <a href="https://sisyphean-games.itch.io/">Sisyphean Games</a>
                <p>I had the opportunity to participate in a game jam with a couple of my cousins. Here is their game company page. Check out what they've been working on lately!</p>
            </article>
        </section>
    );
}

export default Projects;