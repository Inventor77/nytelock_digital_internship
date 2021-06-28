import React from "react";
import { useEffect } from "react";
import { tileInfo } from "../data/tile_info";
import { linksArr } from "../data/tile_link";
import '../App.css';


const TileInfo = props => {
    useEffect(() => {
        document.querySelector('.para').innerHTML = props.para;
    }, [props])
    return (
        <div className="tile_info">
            <h2>{props.head}</h2>
            <div className="para"></div>
        </div>

    );
}

const TileImg = props => {
    return (
        <div className="tile_img">
            <img src={props.srcImg} alt={props.info_title} />
        </div>
    );
}

const TileInfoContainer = props => {
    // 


    return (
        <div className="tile_info_container">
            <TileInfo head={tileInfo[props.index].info_title} para={tileInfo[props.index].info_para} />
            <TileImg srcImg={linksArr[props.index]} />
        </div>
    );
}

export default TileInfoContainer;