import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import Title from "../../Components/Title";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "todolist",
      key: 1111
    };
    console.log("生命周期", "constructor");
  }
  componentWillMount() {
    console.log("生命周期", "componentWillMount");
  }
  render() {
    let { key, title } = this.state;
    let { doClick, msg } = this.props;
    console.log("生命周期", "render");
    return (
      <div className="header">
        {title}
        <Title key={key}></Title>
        <div>
          <NavLink to="/footer" className={style["header-link"]}>
            to Footer
          </NavLink>
        </div>
        <div>
          <NavLink to="/hooks" className={style["header-link"]}>
            to Hooks
          </NavLink>
        </div>
        <button onClick={doClick}>{msg}</button>
        <button onClick={this.handleClick.bind(this)}>key</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("生命周期", "componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("生命周期", "componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("生命周期", "shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("生命周期", "componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("生命周期", "componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("生命周期", "componentWillUnmount");
  }
  handleClick() {
    this.setState(state => {
      state.key += 1;
      return state;
    });
  }
}
