import React from "react";
import { useEffect } from "react";
import { tileInfo } from "../data/tile_info";
import { linksArr } from "../data/tile_link";
import '../App.css';


const TileInfo = props => {
    useEffect(() => {
        document.querySelector('.info_para').innerHTML = props.para;
    }, [props])
    return (
        <div className="tile_info">
            <h2 className="info_head">{props.head}</h2>
            <div className="info_para"></div>
        </div>
    );
}

const TileImg = props => {
    return (
        <div className="tile_img">
            <div className="tile_img_container">
                <img src={props.srcImg} alt={props.info_title} />
            </div>
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