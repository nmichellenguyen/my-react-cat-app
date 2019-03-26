import React, { Component } from 'react';

import './index.css';
import Cat from './Cat'

const CATS = [
  {
    name: "Missy",
    color: "Tabby",
    special_ability: "Catching Mice",
    img_url:
      "https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Snowball",
    color: "Black",
    special_ability: "Catching Mice",
    img_url:
      "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Snuggle",
    color: "White",
    special_ability: "Catching Mice",
    img_url:
      "https://images.unsplash.com/photo-1516399779-1480b4f76df6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    adopted: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      catsList: CATS
    };
  }
  adoptcat(name) {
    // alert("hello" + name);
    this.setState({
      catsList: this.state.catsList.map(cat => {
        if (cat.name === name) {
          cat.adopted = !cat.adopted;
        }
        return cat;
      })
    });
  }

  render() {
    return (
      <div>
        <h1> This is my Cat App</h1>
        <p> This is a list of awesome, cute cats.</p>
        <p> I wrote this in React! </p>
        <span id="addInfo">
          {" "}
          Find your cat a new home? Please fill in the below{" "}
        </span>
        <div>
          <form class="addCat">
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Color..." />
            <input type="text" placeholder="Ability..." />

            <button>Add </button>
          </form>
        </div>
        {this.state.catsList.map(cat => (
          <Cat
            name={cat.name}
            color={cat.color}
            special_ability={cat.special_ability}
            img_url={cat.img_url}
            adopted={cat.adopted}
            handleAdopt={name => this.adoptcat(name)}
          />
        ))}
      </div>
    );
  }
}

export default App;
