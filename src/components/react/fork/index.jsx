import React from 'react';
import formImg from 'images/example/fork.svg';
import './fork.scss';
export default function Fork () {
    return (
        <div className="fork">
            <a href="https://github.com/pomelott/webpack-multipage-cli">
                <img src={formImg} alt="fork-img"/>
            </a>
        </div>
    );
}