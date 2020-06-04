import React from 'react';
import Logo from '../logo';
import reactImg from 'images/example/react.jpg';
import Fork from '../fork';
import './app.scss';
class App extends React.Component{
    render () {
        return (
            <div className="react-demo tc">
                <Logo img={reactImg} type="bounce"/>
                <div className="mt20 labels">
                    <img src="https://img.shields.io/badge/webpack-4.0.0+-green" alt="webpack-version"/>
                    <img src="https://img.shields.io/badge/vue-16.0.0+-green" alt="react-version"/>
                    <img src="https://img.shields.io/badge/prop--types-15.0.0+-green" alt="propTypes-version"/>
                </div>
                <div className="links mt20">
                    <a href="https://github.com/pomelott/webpack-multi-page-cli">CLI-Document</a>
                    <a href="https://react.docschina.org/">React-Document</a>
                    <a href="https://github.com/pomelott">Contact</a>
                </div>
                <p className="react-demo-des font14 mt20">you can use this webpack-cli in SPA and Multi Page Application, <br/>
                if any questions, please contact me.</p>
                <Fork/>
            </div>
        );
    }
}

export default App;