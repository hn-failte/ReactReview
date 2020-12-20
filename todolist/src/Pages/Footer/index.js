import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Footer.module.scss'

export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'todolist'
        }
    }
    render(){
        return (
            <div className={style.footer}>
                <header>Footer</header>
                <NavLink to="/header">to Header</NavLink>
                <div className={style.para}>
                    Hello World!
                </div>
            </div>
        )
    }
}
