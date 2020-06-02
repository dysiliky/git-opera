import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, minus, asyncAdd} from "../store/counter";
import test from "./test";

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
    componentDidMount() {
        let pre = document.querySelector('.redux')
        console.log(pre.previousElementSibling.tagName.toLowerCase(), '========')
    }

    render() {
        const {num, add, minus, asyncAdd} = this.props
        return (
            <div>
                html
                <p>{num}</p>
                <div>
                    <audio className="ndsjf">commit amend</audio>
                    <p className="redux">redux</p>
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
