import React from "react";
import Card from "./Card";
import Data from "./data";

const functionA = (currValue, index) => {
    return (
        <Card key={currValue.id}
            imglink={currValue.imglink}
            Name={currValue.Name}
            Link={currValue.Link}
            Netflix={currValue.Netflix} />
    )
} 


function Netflix(){
    return Data.map(functionA);
}

export default Netflix;

// return (
//     <Card key={currValue.id}
//         imglink={currValue.imglink}
//         Name={currValue.Name}
//         Link={currValue.Link}
//         Netflix={currValue.Netflix} />
// )




// const functionA = (currValue, index) => {
//     return (
//         <Card key={currValue.id}
//             imglink={currValue.imglink}
//             Name={currValue.Name}
//             Link={currValue.Link}
//             Netflix={currValue.Netflix} />
//     )
// } 