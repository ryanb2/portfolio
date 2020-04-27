import React from 'react';
import '../../styles/Category.scss';

function Category(props) {
    return (
        <div className="category">
            <h1>{ props.title }</h1>
        </div>
    );
}

export default Category;