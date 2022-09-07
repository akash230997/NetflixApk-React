import React from "react";
import './index.css'


function Card(props) {
    return(
        <>
            <div className="cards">
                <div className="card">
                    <div className="cardd">
                        <img src={props.imglink} alt="img1" />
                    </div>
                    <div className="netflix" style={{textAlign:'center'}}>A Orignal Netflix Show</div>
                    <div className="title">{props.Name}</div>
                    <a href={props.Link}><button type="button" className="btn-watch">Watch Now</button></a>
                </div>
            </div>
        </>
    )
}

export default Card;