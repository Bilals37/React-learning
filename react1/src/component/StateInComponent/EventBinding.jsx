import React, { Component } from "react";

class EventBinding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: "Bilaal",
            },
        };
    }

    changeState = () => {
        // Updating state using this.setState
        this.setState({
            person: {
                name: "Bilal",
            },
        });
    };

    render() {
        return (
            <>
                <h1>State In Function</h1>
                <h3>Person Name is updated on clicking Below Button</h3>
                <h3>{this.state.person.name}</h3>
                <button onClick={this.changeState}>Change name</button>
            </>
        );
    }
}

export default EventBinding;
