import axios from "axios";
import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import "./ApiInte.css"

class ApiIntegration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: [],
        }
    }


    componentDidMount() {
        console.log('Inside componentDidMount')
        this.fetchUserDetails()
    }

    fetchUserDetails = async () => {
        const userData = await axios.get('https://fakestoreapi.com/products')
        console.log(userData.data)
        this.setState({ user: userData.data })
    }

    render() {

        return (
            <>
                <div className="container">
                    <div className="item">
                        {this.state.user.map((user) => (
                            <div className="iteamDetails">
                                <div className="card detail iteamDetails" style={{ width: "20rem" }} key={user.id}>
                                    <span>{user.category}</span>
                                    <img src={user.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"> {user.title}</h5>
                                        <hr />
                                        <h6 className="card-title"><b>Price:</b> {user.price}&#8377;</h6>
                                        <b>Description:</b>
                                        <p className="card-text">{user.description}</p>
                                        <p className="card-text">
                                            <b>Rating: {user.rating.rate} (Count: {user.rating.count})</b>
                                        </p>
                                        <hr />
                                        <div class="container text-center">
                                            <div class="row">
                                                <div class="col">
                                                    <button type="button" class="btn btn-success">BUY</button>
                                                </div>
                                                <div class="col">
                                                    <button type="button" class="btn btn-primary">ADD to Card</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}


                    </div>
                </div>
            </>
        )

    }

}

export default ApiIntegration;















/* */










// {
//     this.state.user.map((user) => (
//         <div className="itemDetail" key={user.id}>
//             <div className="itemsOk">
//                 <p>{user.category}</p>
//                 <img src={user.image} alt="" width={100} />
//                 <h5>{user.title}</h5>
//                 <h6>Price: {user.price}</h6>
//                 <p>{user.description}</p>
//                 <p>Rating{user.rating.rate} Count{user.rating.count}</p>
//             </div>


//         </div>
//  ))}