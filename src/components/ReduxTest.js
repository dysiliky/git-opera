import React, {Component} from 'react';
import {connect} from 'react-redux';

/*const mapStateToProps = state => ({num: state})
const mapDispatchToProps = dispatch => ({
    add: () => dispatch({type: 'add'}),
    minus: () => dispatch({type: 'minus'})
})*/

@connect(
    state => ({num: state}), // 状态映射
    {
        add: () => ({type: 'add'}),
        minus: () => ({type: 'minus'})
    }
)
class ReduxTest extends Component {
    render() {
        const {num, add, minus} = this.props
        return (
            <div>
                <p>{num}</p>
                <div>
                    <button onClick={() => add()}>+</button>
                    <button onClick={() => minus()}>-</button>
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
