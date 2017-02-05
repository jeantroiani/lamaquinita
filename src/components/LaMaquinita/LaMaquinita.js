import React from 'react';
import CSSModules from 'react-css-modules';
import prize from './prize.png';
import styles from './LaMaquinita.less';

function LaMaquinita (props) {
    return (
        <section styleName="container">
            <h1 styleName="main-title">Welcome to La Maquinita</h1>
            <p styleName="content">Discover and share</p>
            <img styleName="image" src={ prize } />
            { props.children }
        </section>
    );
}

export default CSSModules(LaMaquinita, styles);
