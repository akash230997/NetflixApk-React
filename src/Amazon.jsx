import React from "react";
import AmaData from "./AmazonData";
import Card from "./Card";

function functionB(currVal){
    return (
        <Card
            key = {currVal.id}
            imglink = {currVal.imglink}
            Name={currVal.Name}
            Link={currVal.Link}
            AmazonPrime = {currVal.AmazonPrime}
        />
    )
}

function Amazon(){
    return AmaData.map(functionB)
}


export default Amazon;