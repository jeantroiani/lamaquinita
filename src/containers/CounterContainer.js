import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increaseValue, decreaseValue } from '../actions/counterActions';
import Counter from '../components/Counter/Counter';

class CounterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Counter
                    value={this.props.value.value}
                    increaseValue={this.props.increaseValue}
                    decreaseValue={this.props.decreaseValue}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        increaseValue,
        decreaseValue
    }
    return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
