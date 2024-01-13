import React, { Component } from 'react';

class StateInClassComp extends Component{

    constructor(props){

        super(props)
        
        this.name ="Anand";

        this.state={
            userName : 'Umesh'
        }

        this.state={
            number:10,
            sName : 'Rupesh',
            flag:true,
            arrayValue:[1,2,3,4,8,9],
            person:{
                name:'Bilal',
                add:'Pune'
            }
        }
    }

    userChange(){
       // alert('User Change Func Called')
       console.log('Button Clicked')
       this.name = "Sarika"
       console.log(this.name)
    }

    changeUserName(){
       // alert('Inside changeUserName')
       this.setState({userName:'Admin'})
    }

    render(){
       
        return(
            <>
                <h1>State in class Comp</h1>
                <h4>Name is : {this.name}</h4>
                <button onClick={this.userChange.bind(this)}>Change User</button>

                <h4>User Name Is: {this.state.userName}</h4>
                <button onClick={this.changeUserName.bind(this)}> User Name Change</button>

                
                    <p>Number is: {this.state.number}</p>
                    <p>Name is: {this.state.sName}</p>
                    <p>Number is: {this.state.flag?"True":"False"}</p>
                    <p>arrayValue is: {this.state.arrayValue.join(',')}</p>
                    <p>Object Value is: {JSON.stringify(this.state.person)}</p>

            </>

        )
    }

}
export default StateInClassComp;