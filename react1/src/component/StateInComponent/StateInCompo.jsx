import React, {Component} from "react";

class Bike extends Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Honda",
        model: "Splender ",
        color: "red ",
        year: 2005
      };
    }
    changeColor = () => {
      this.setState({color: "blue "});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
             {this.state.model}
             from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }

  export default Bike;