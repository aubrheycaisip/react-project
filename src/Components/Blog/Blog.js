import React, { useContext, useEffect, useState } from "react";
import BlogTypeContext from "./Context.js";

function Blog(props) {
    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const blogType = useContext(BlogTypeContext);

    // useEffect(() => {
    //     alert("hello side effect");
    // });
    // useEffect(() => {
    //     console.log(loaded);
    //     fetch("foo").then(() => setLoaded(true));
    // }, [count, loaded]);
    // useEffect(() => {
    //     alert("hello side effect");
    //     return () => alert("goodbye component!");
    // });

    return (
        <div className='content'>
            <h1>{props.title}</h1>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <p>{blogType}</p>
        </div>
    );
}

export default Blog;
