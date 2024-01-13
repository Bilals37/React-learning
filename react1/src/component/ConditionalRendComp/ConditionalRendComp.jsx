import React, { useState } from 'react'

const ConditionalRendComp = () => {

    const [isLoggedIn, setLoggedIn] = useState(true)

    //1. conditional rendering using if/else
    // if(isLoggedIn){
    //     return <Login/>
    // }else{
    //     return <Signup/>
    // }

    //2. Conditional rendering using Variable

    // let rendComponent;
    // if(isLoggedIn){
    //     rendComponent = <Login/>
    // }else{
    //     rendComponent = <Signup/>
    // }
    // return rendComponent;

    //3. Conditional rendering using ternory operator

    return isLoggedIn ? <Login /> : <Signup />

    //4. Conditional rendering using short circuit
    // return isLoggedIn && <Login/>


}

const Login = () => {

    return (
        <>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

const Signup = () => {

    return (
        <>
            <h4>Sign Up</h4>
            <p> Full Name : <input type='text' /> </p>
            <p> User Name : <input type='text' /> </p>
            <p> Password : <input type='text' /> </p>
            <p> email id : <input type='text' /> </p>
            <p> Mobile Num : <input type='text' /> </p>
        </>
    )
}

export default ConditionalRendComp
