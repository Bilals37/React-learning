

function FunChildProps(props) {
    const { message, data } = props;
    return (
        <>
            <hr />
            <h1>Props In Function Component</h1>
            <h3>{message}</h3>
            <p>User Details:<br />
                Name:{data.name}<br />
                Age:{data.age}</p>
        </>
    )
}
export default FunChildProps;