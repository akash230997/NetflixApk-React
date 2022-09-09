import React from "react";
import './index.css'
import Heading from "./Heading";
import Img from "./Images";


function Card(props) {
    return(
        <>
            <div className="cards">
                <div className="card">
                    <div className="cardd">
                        <Img imglink={props.imglink}/>
                    </div>
                    <div className="netflix" style={{textAlign:'center'}}>A Orignal Netflix Show</div>
                    <Heading Name={props.Name} />
                    <a href={props.Link}><button type="button" className="btn-watch">Watch Now</button></a>
                </div>
            </div>
        </>
    )
}

export default Card;