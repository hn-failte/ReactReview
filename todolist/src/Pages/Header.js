import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'
import Title from '../Components/Title'

export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            key: 1111
        }
    }
    render(){
        let {key} = this.state
        let {doClick, msg} = this.props;
        return (
            <div className={style.header}>
                <Title key={key}></Title>
                <NavLink to="/footer" className={style['header-link']}>to Footer</NavLink>
                <button onClick={doClick}>{msg}</button>
                <button onClick={this.handleClick.bind(this)}>{key}</button>
            </div>
        )
    }
    handleClick(){
        this.setState(state => {
            state.key += 1
            return state
        })
    }
}
