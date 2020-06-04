import React from 'react';
import PropTypes from 'prop-types';
import './logo.scss';
class Logo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            activeClass: ''
        };
    }
    render () {
        return (
            <div className="logo">
                <img  src={this.props.img} className={this.state.activeClass}/>
            </div>
        );
    }
    componentDidMount () {
        this.setState({
            activeClass: `animate__animated animate__${this.props.type}`
        });
    }
}
Logo.propTypes = {
    img: PropTypes.string,
    type: PropTypes.string
};

export default Logo;