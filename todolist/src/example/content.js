import { memo } from "react";

function Content({onIncrease}){
    return (
        <>
            <h2>Hello World</h2>
            <button onClick={onIncrease}>Click me !</button>
        </>
    )
}
export default  memo(Content);