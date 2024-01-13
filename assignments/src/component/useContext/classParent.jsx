import React from "react";
import UseContext from "./classUseCon";
import ChildClass1 from "./ClassChild1";

class ClassParent extends React.Component {

    render() {

        let clssContext = 'useContext'
        return (
            <>

                <UseContext.Provider value={clssContext}>
                    <div className="main">

                        <h1>{clssContext} in Class Component</h1>


                        <ChildClass1 />
                    </div>
                </UseContext.Provider>
            </>
        )
    }
}
export default ClassParent;
