import React, {Component} from 'react';

class Es6 extends Component {
    componentDidMount() {
        let data = {
            name: '小明',
            age: '23',
            sex: '男',
            hobby: {
                first: 234,
                second: '羽毛球'
            }
        }
        const  {name:  a, age, sex, hobby: { first : dev }, level = 8} = data || {}
        console.log(a, age, sex, dev, level)

        // Parameter Context Matching
        this.f([ "bar", 42 ])
        this.g({ name: "foo", val:  7 })
        this.h({ name: "bar", val: 42 })

        // Map/Set & WeakMap/WeakSet (Parameter Context Matching)
        /*let s = new Set()
        s.add("hello").add("goodbye").add("hello")
        console.log(s, s.size === 2)
        console.log(s.has("hello") === true)
        for (let key of s.values()) // insertion order
            console.log(key)*/

        // Map Data-Structure
        let m = new Map()
        let s = Symbol()
        m.set("hello", 42)
        m.set(s, 34)
        console.log(m, m.get(s)) //  === 34
        console.log(m.entries()) // {"hello" => 42}   34
       // for (let [k, v] of m.entries()) console.log(k + ':' + v) // 报错，原因[k, v], Cannot convert a Symbol value to a string
        for (let item of m.entries())  console.log(item) // ["hello", 42]    [Symbol(), 34]


        // ...
        let arr1 = [21, 42, 53, 45, 2, 2, 4, 5, 6, 3, 3, 2]
        console.log(new Set(arr1), [...new Set(arr1)], ...arr1, '-----------------arr1')

        this.argTest(2, 3, {
            a: 1,
            b: 2,
            c: 3
        }, )
    }

    argTest(a, ...args) {
        console.log(...args, '======================args')
    }

    f([ name, val ]) {
        console.log(name, val)
    }

    g({ name: n, val: v }) {
        console.log(n, v)
    }

    h({ name, val }) {
        console.log(name, val)
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Es6;