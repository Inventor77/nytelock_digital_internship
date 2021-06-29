import React, { useState } from "react";
import '../App.css';


function Tile({ setIndex, idx, boolClass, ...props }) {

    // let tileContent = document.querySelector('.tile_content');
    // let classAdder = () => {
    //     tileContent.classList.add = "cloud";
    // }
    const [tileClass] = useState(" cloud")
    let changeClass = () => {
        for (let i = 0; i < boolClass.length; i++) {
            boolClass[i] = false;
        }
        boolClass[idx] = true;
    }



    return (
        <div className={"tile"} onClick={() => setIndex(idx)}>
            <div className={"tile_content" + (boolClass[idx] ? tileClass : "")} onClick={() => changeClass()} >
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