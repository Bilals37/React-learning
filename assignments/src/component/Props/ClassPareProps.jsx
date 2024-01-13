import { Component } from "react";
import ClassChildProps from "./ClassChildProps";


class ClassParentProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello Props, I am From Parent Class Component",
            user: {
                name: 'Bilal',
                age: 23,
                city: 'Shrirampur'
            }
        }
    }
    render() {
        return (
            <>
                <ClassChildProps message={this.state.message} data={this.state.user} />
            </>
        )
    }
}
export default ClassParentProps;