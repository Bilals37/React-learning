import React, {Component} from "react";
import { Button } from "react-bootstrap";

class CompLifeCycle extends Component{

    //1. Intialization Phase
    constructor(props){
        super(props)
        console.log("Class Component Constructor")

        this.state={
            name:"Welcome to Class Comp"
        }
    }

    //2. Mounting Phase

    static getDerivedStateFromProps(props){
        console.log("Inside getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log('Inside componentDidMount')
    }

    updateName =()=>{
        this.setState({name: "Welcome to React comp"});
    }

    shouldComponentUpdate(){
        console.log('Inside shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('Inside getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('Inside componentDidUpdate')
        return null
    }

    render(){
            console.log('Inside render method')
            return(
                <>

                    <h1>Class Compo Life Cycle</h1>
                    <h2>{this.state.name} : <Button variant="primary" onClick={this.updateName}>Update Message</Button></h2>
                </>
            )

    }

    //3. Updating Phase // getDerivedStateFromProps() //shouldComponentUpdate() //render() // getSnapshotBeforeUpdate() // componentDidUpdate()

}

export default CompLifeCycle;