import React from "react";
import UseContext from "./classUseCon";
import ChildClass2 from "./ClassChild2";
import ChildClass3 from "./ClassChild3";

class ChildClass1 extends React.Component {

    static contextType = UseContext
    render() {


        let message = this.context;
        return (
            <>
                <div className="parent">
                    <h3>{message} Child 1</h3>

                    <ChildClass2 />
                    <ChildClass3 />
                </div>
            </>
        )
    }

}

export default ChildClass1;