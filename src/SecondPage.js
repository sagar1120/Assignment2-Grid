import React from "react";

function SecondPage(props) {

    console.log('props',props);
    return(
        <h1>I'M. from Second page, My Class Name is {props.ClassData}</h1>
    ) 
};

export default SecondPage;