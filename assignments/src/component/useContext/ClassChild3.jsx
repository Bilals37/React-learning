import React from "react";
import UseContext from "./classUseCon";

class ChildClass3 extends React.Component {

    static contextType = UseContext
    render() {


        let message = this.context;
        return (
            <>
                <div className="childMain">
                    <h3>Hello <mark>{message}</mark> From Class Component Child 3</h3>
                </div>
            </>
        )
    }

}

export default ChildClass3;