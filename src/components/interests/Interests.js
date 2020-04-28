import React from 'react';
import {
    Switch,
    Route
  } from 'react-router-dom';
import Category from './Category';
import VideoGames from './topics/VideoGames';
import Coffee from './topics/Coffee';
import Music from './topics/Music';
import Snowboarding from './topics/Snowboarding';
import '../../styles/Interests.scss';

function Interests() {
    return (
        <section className="interests">
            <Switch>
                <Route
                    path="/portfolio/interests/video-games"
                    component={ VideoGames }
                />
                <Route
                    path="/portfolio/interests/coffee"
                    component={ Coffee }
                />
                <Route
                    path="/portfolio/interests/music"
                    component={ Music }
                />
                <Route
                    path="/portfolio/interests/snowboarding"
                    component={ Snowboarding }
                />
                <Route path="/portfolio/interests">
                    <article className="summary">
                        Here are some things I'm interested in. Check out the links on the right to see more.
                    </article>
                </Route>
            </Switch>
            <aside>
                <Category title="Video Games" link="/portfolio/interests/video-games" />
                <Category title="Coffee" link="/portfolio/interests/coffee" />
                <Category title="Music" link="/portfolio/interests/music" />
                <Category title="Snowboarding" link="/portfolio/interests/snowboarding" />
            </aside>
        </section>
    );
}

export default Interests;