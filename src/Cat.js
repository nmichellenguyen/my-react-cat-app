import React, { Component } from 'react'

class Cat extends React.Component {
    render() {
      let message;
      if (this.props.adopted) {
        message = "I'm adopted!";
      } else {
        message = "I'm abandoned :(";
      }
  
      return (
        <div className="detail">
          <strong>Name: {this.props.name}</strong>
          <p>Color: {this.props.color}</p>
          <p>Ability: {this.props.special_ability}</p>
          <p>Status: {message}</p>
          <img src={this.props.img_url} />
          <div>
            <button
              class="click"
              onClick={() => this.props.handleAdopt(this.props.name)}
            >
              {" "}
              Adopt Me{" "}
            </button>
          </div>
        </div>
      );
    }
  }

  export default Cat
  
