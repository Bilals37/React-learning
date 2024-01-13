import { Component } from "react";

class ClassChildProps extends Component {
    render() {
        const { message, data } = this.props
        return (
            <>
                <h1>Props In Class Component</h1>
                <h3>{message}</h3>
                <p>User Details:<br />
                    Name:{data.name}<br />
                    Age:{data.age}</p>
            </>
        )
    }
}
export default ClassChildProps;