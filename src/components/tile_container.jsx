import React from "react";
import Tile from './tile';
import { useState } from "react";
import '../App.css';


function TileContainer({ setIndex }) {
    const [tileArr] = useState([
        {
            tile_title: "Lettermark",
            tile_icon: "fas fa-italic"
        },
        {
            tile_title: "Wordmark",
            tile_icon: "fab fa-weebly"
        },
        {
            tile_title: "Pictorial Mark",
            tile_icon: "fas fa-lemon"
        },
        {
            tile_title: "Abstract Mark",
            tile_icon: "fab fa-artstation"
        },
        {
            tile_title: "Mascot",
            tile_icon: "fas fa-theater-masks"
        },
        {
            tile_title: "Combination",
            tile_icon: "fas fa-puzzle-piece"
        }])
    const [boolClass] = useState([true, false, false, false, false, false,])

    return (
        <div className="tile_container">
            <section className="upper_section" >
                <div className="container_header">
                    <h4 className="sub-heading"><li><span>How do I know which logo style is right for me?</span></li></h4>
                    <h1 className="main-heading">Different Types of Logo Styles</h1>
                </div>
                <div className="container_nav">
                    <div className="button">
                        <span className="span"></span>
                        <a href="https://nytelock.com/quote" target="_blank" rel="noreferrer" className="nav_btn">
                            <span>Contact Us</span>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                    </div>
                </div>
            </section>
            <section className="lower_section">
                {tileArr.map((obj, index) => {
                    return <Tile key={index} setIndex={setIndex} idx={index} title={obj.tile_title} tileClass={obj.tile_icon} boolClass={ boolClass }/>
                })}
            </section>
        </div>
    );
};

export default TileContainer;