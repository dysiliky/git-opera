// reducer: 状态修改具体执行者
export default (state = 0, action) => { // const counterReducer =
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
            return state;
    }
}

const add = () => {
    return {type: 'add'}
}
const minus = () => {
    return ({type: 'minus'})
}
const asyncAdd = () => {
    return (dispatch, getState) => {
        console.log(getState())
        // 模拟异步操作
        setTimeout(() => {
            dispatch({type: 'add'})
        }, 1000)
    }
}

export {add, minus, asyncAdd}