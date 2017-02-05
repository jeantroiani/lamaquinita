import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Counter.less';

@CSSModules(styles)
class Counter extends Component {
    constructor(props) {
        super(props);
    }

    handleIncreaseValue = () => {
        const { increaseValue } = this.props;
        increaseValue(1);
    }

    handleDecreaseValue = () => {
        const { decreaseValue } = this.props;
        decreaseValue(1);
    }

    render() {
        const { value } = this.props;
        return (
            <div styleName="container">
                <p styleName="content">{value}</p>
                <button styleName="action-increase" onClick={this.handleIncreaseValue}> + </button>
                <button styleName="action-decrease" onClick={this.handleDecreaseValue}> - </button>
            </div>
        );
    }
}

export default Counter;
