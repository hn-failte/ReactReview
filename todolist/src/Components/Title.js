import React from 'react'

export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'todolist'
        }
        console.log('生命周期', 'constructor')
    }
    componentWillMount(){
        console.log('生命周期', 'componentWillMount')
    }
    render(){
        let {title} = this.state
        console.log('生命周期', 'render')
        return (
            <div>
                {title}
            </div>
        )
    }
    componentDidMount(){
        console.log('生命周期', 'componentDidMount')
    }

    componentWillReceiveProps(){
        console.log('生命周期', 'componentWillReceiveProps')
    }

    shouldComponentUpdate(){
        console.log('生命周期', 'shouldComponentUpdate')
        return true
    }
    componentWillUpdate(){
        console.log('生命周期', 'componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('生命周期', 'componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('生命周期', 'componentWillUnmount')
    }
}
