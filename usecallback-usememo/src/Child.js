import React from "react";
const Child = (props) => {
    console.log("child....." + props.result);
    return (
        <div>
            <h4>Child component with no props</h4>
            <button onClick={props.increaseCount}>Increase count </button>

        </div>
    );
}
export default React.memo(Child);