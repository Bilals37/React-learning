const StatInFun=()=>{

    const Person={
        Name: "Bilaal",
        LastName: "Shaikh",
        Age: 22,
        City: "Shrirampur"

    }

    const changeState=()=>{
        this.setState({Name: "Bilal "});
    }
    return(
        <>
          <h1>Sate In Function</h1>
          <h3>Person Name is updated on clicking Below Button</h3>
          <h3>{this.Person.name}</h3>
          <button onClick={this.changeState}>Change name</button>
        </>
    )
}

export default StatInFun;