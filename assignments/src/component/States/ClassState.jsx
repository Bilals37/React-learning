const { Component } = require("react");

class ClassState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role: "Admin",
            name: "Bilal",
            contact: {
                email: "bilal@gmail.com",
                phone: 7654978410
            }
        }
    }

    changeRole() {
        this.setState({ role: "Team Lead" })
    }

    render() {
        return (
            <>
                <h1>State In Class Component</h1>
                <h3>{this.state.name} is <mark>{this.state.role}</mark> of our Team <br />
                    His Contact Details are <br />
                    Email ID:{this.state.contact.email} <br />
                    Mobile No:{this.state.contact.phone}</h3>

                <h5><i>If You click on Below Button His Role Will get Change</i></h5>
                <button onClick={this.changeRole.bind(this)} style={{ borderRadius: '5px' }}>Click ME</button>
                <hr />
            </>
        )
    }
}
export default ClassState;