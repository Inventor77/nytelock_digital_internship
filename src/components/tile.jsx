import React from "react";
import '../App.css';


function Tile({ setIndex, idx, ...props }) {
    return (
        <div className={"tile"} onClick={() => setIndex(idx)}>
            <div className={"tile_content"}>
                <div>
                    <i aria-hidden="true" className={props.tileClass}></i>
                </div>
                <h5 className={"tile_title"}>
                    {props.title}
                    <br />
                    Logos
                </h5>
            </div>
        </div>
    );
}

export default Tile