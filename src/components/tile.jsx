import React from "react";
import '../App.css';


function Tile({ setIndex, idx, ...props }) {
    return (
        <div className={"tile"} onClick={() => setIndex(idx)}>
            <div>
                <div>
                    <i aria-hidden="true" className={props.tileClass}></i>
                </div>
                <h3 className={"tile_title"}>
                    {props.title}
                    <br />
                    Logos
                </h3>
            </div>
        </div>
    );
}

export default Tile