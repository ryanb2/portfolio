import React from 'react';
import Category from './Category';
import '../../styles/Interests.scss';

function Interests() {
    return (
        <section className="interests">
            <Category title="Video Games" />
            <Category title="Coffee" />
            <Category title="Music" />
            <Category title="Snowboarding / Skateboarding" />
        </section>
    );
}

export default Interests;