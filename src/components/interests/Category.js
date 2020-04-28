import React from 'react';
import {
    Link
} from 'react-router-dom';
import '../../styles/Category.scss';

function Category(props) {
    return (
        <Link className="category" to={ props.link }>
            <h1>{ props.title }</h1>
        </Link>
    );
}

export default Category;