import React, { Component } from "react";

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      color: true,
      contador: 0,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){
      this.setState(prevProps => ({
          contador: prevProps.contador + 1,
          color: !prevProps.color
      }))
  }

  render() {
    const { color, contador } = this.state;
    return (
      <button
      onClick={this.handleChange}
        style={{
          backgroundColor: color && 'green',
          height: "50px",
          width: "50px",
          fontSize: "30px",
        }}
      >
        {contador}
      </button>
    );
  }
}
