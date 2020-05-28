import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, minus, asyncAdd} from "../store/counter";

/*const mapStateToProps = state => ({num: state})
const mapDispatchToProps = dispatch => ({
    add: () => dispatch({type: 'add'}),
    minus: () => dispatch({type: 'minus'})
})*/

@connect(
    state => ({num: state.counter}), // 状态映射
    {
        add,
        minus,
        asyncAdd
    }
)
class ReduxTest extends Component {
    render() {
        const {num, add, minus, asyncAdd} = this.props
        return (
            <div>
                <p>{num}</p>
                <div>
                    <button onClick={() => add()}>+</button>
                    <button onClick={() => minus()}>-</button>
                    <button onClick={() => asyncAdd()}>asyncAdd</button>
                </div>
            </div>
        );
    }
}

export default ReduxTest

/*export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxTest);*/
