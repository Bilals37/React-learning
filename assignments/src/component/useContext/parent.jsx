import Child1 from "./child1";
import Child2 from "./child2";

function Parent() {
    return (
        <>
            <div className="parent">
                <h1>I am Parent</h1>
                <Child1 />
                <Child2 />
            </div>

        </>
    );
}

export default Parent;