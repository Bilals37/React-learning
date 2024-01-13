import './styling.css'
const StylingComp = () => {

    const Style = {

        color: "navy",
        fontSize: "50px"
    }

    return (
        <>
            {/* Inline CSS */}
            <h1 style={{ color: "blue" }}>Hello Developer This is Inline CSS</h1>

            {/* Internal CSS */}
            <h1 style={Style}>Hello Developer This is Internal CSS</h1>

            {/* External CSS */}
            <h1 className="Styling">Hello Developer This is External CSS</h1>
        </>
    )

}

export default StylingComp;