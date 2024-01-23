import { useState } from "react"



function Condition1() {
    const [isLogin, setLogin] = useState(true)

    return isLogin ? <Login /> : <Signup />
}

const Login = () => {

    return (

        <>
            <h1>Condition Rendaring</h1>
            <h3>Login</h3>
            <form >
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
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
            <h1>Condition Rendaring</h1>
            <h3>Sign Up</h3>
            <p> Full Name : <input type='text' /> </p>
            <p> User Name : <input type='text' /> </p>
            <p> Password : <input type='text' /> </p>
            <p> email id : <input type='text' /> </p>
            <p> Mobile Num : <input type='text' /> </p>
        </>
    )
}

export default Condition1;