// import React from "react";

// class Student extends React.Component{
//     render(){
//         console.log(this.props);
//         const {Stuname,marks} = this.props;
//         return(
//             <>
//             <h1>Hello, {Stuname}</h1>
//             <p>You Have secured {marks}</p>
//             </>
//         )
//     }
// }
function Student(props) {
    const { Stuname, marks } = props;
    // props.Stuname = "Alxa";
    return (
        <>
            <h1>Hello, {Stuname}</h1>
            <p>You have secured {marks}</p>
            <hr/>
        </>
    );
}

export default Student;
